import React from 'react'
import { connect } from 'react-redux'
import { follow, requestUsers, unfollow, setCurrentPage, toggleFollowingInProgress } from '../../../redux/usersReducer'
import Users from './Users'
import Preloader from '../../common/Preloader/Preloader'
import { compose } from 'redux'
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount } from '../../../redux/usersSelectors'
import style from './Users.module.css'
import Paginator from '../../common/Paginator/Paginator'


class UsersContainer extends React.Component {
    componentDidMount() {
        const { currentPage, pageSize } = this.props
        this.props.requestUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber) => {
        const { pageSize } = this.props
        this.props.requestUsers(pageNumber, pageSize)
    }

    render() {
        return <div>
            <h1>Пользователи</h1>
            <div className={style.paginator}>
                <Paginator currentPage={this.props.currentPage}
                    totalItemsCount={this.props.totalUsersCount}
                    onPageChanged={this.onPageChanged}
                    pageSize={this.props.pageSize} />
            </div>
            {this.props.isFetching ? <Preloader /> : null}
            {this.props.isFetching ? null : <Users
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
            />}
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

let mapDispatchToProps = {
    follow, unfollow, setCurrentPage,
    toggleFollowingInProgress, requestUsers
}

export default compose(
    // withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(UsersContainer)