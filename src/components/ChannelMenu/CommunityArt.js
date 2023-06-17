function CommunityArt(props) {
    const { communityImage } = props;
    return (
        <img src={communityImage} height={"200px"} className="channel-menu-avatar" />
    )
}