function CommunityArt(props) {
    const { communityImage } = props;
    return (
        <img src={communityImage} height={"200px"} width={"200px"} id="channel-menu-avatar" />
    )
}

export default CommunityArt;