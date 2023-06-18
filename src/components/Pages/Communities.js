import { Box, Grid } from "@mui/material";
import CommunityCard from "../CommunityCard";
import { Container } from "react-bootstrap";
import { communities } from "../../data/communities"



function Communities() {

    return (
        <>
        <Container fluid id="community-page-scroll">
        <p className="display-4" id="welcome-header">Explore Our Communities</p>

        <Box sx={{ flexGrow: 1 }} id="cover-art-grid">
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {communities.map((community, index) => {
          return (
            <Grid key={index} item xs={2} sm={4} md={4}>
              <CommunityCard
                community={community}
                {...community}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
    </Container>

        </>


    );
}

export default Communities;