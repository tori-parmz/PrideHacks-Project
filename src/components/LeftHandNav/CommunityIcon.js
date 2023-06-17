function CommunityIcon(props) {
   const { communityImage } = props;
    return (
        <img src={communityImage} id='community-icon' />
    );
}

export default CommunityIcon;