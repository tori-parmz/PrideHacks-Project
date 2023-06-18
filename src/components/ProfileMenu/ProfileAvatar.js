function ProfileAvatar(props) {
    const { profileAvatar } = props;
    return (
        <img src={profileAvatar} height={"150px"} width={"150px"} id="profile-avatar" />
    )
}

export default ProfileAvatar;