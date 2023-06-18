import { Box, Grid } from "@mui/material";
import CommunityCard from "../CommunityCard";
import Transmasc from "../../assets/community-images/transmasc.png";
import Transfemme from "../../assets/community-images/transfemme.png";
import Nonbinary from "../../assets/community-images/nonbinary.png";
import Ace from "../../assets/community-images/asexual.png";
import Bi from "../../assets/community-images/bisexual.png";
import Gay from "../../assets/community-images/gay.png";
import Lesbian from "../../assets/community-images/lesbian.png";
import Chicago from "../../assets/community-images/chicago.png";
import Krafty from "../../assets/community-images/krafts.png";
import NYC from "../../assets/community-images/nyc.png";
import LA from "../../assets/community-images/la.png";
import Tech from "../../assets/community-images/tech.png";
import Activism from "../../assets/community-images/activism.png";
import MentalHealth from "../../assets/community-images/mental health.png";
import { Container } from "react-bootstrap";




const communities = [
    {
        name: "Transmasc",
        image: Transmasc,
        membersOnline: 127,
        totalMembers: 1940,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        topics: [
            {
                title: "Topic One",
                channels: ["channel-one", "channel-two", "channel-three"]
            },
            {
                title: "Topic Two",
                channels: ["channel-one", "channel-two", "channel-three"]
            },
            {
                title: "Topic Three",
                channels: ["channel-one", "channel-two", "channel-three"]
            }
        ],

    },
    {
        name: "Transfemme",
        image: Transfemme,
        membersOnline: 25,
        totalMembers: 3544,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        topics: [
            {
                title: "Topic One",
                channels: ["channel-one", "channel-two", "channel-three"]
            },
            {
                title: "Topic Two",
                channels: ["channel-one", "channel-two", "channel-three"]
            },
            {
                title: "Topic Three",
                channels: ["channel-one", "channel-two", "channel-three"]
            }
        ],

    },
    {
        name: "Nonbinary",
        image: Nonbinary,
        membersOnline: 78,
        totalMembers: 1064,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        topics: [
            {
                title: "Topic One",
                channels: ["channel-one", "channel-two", "channel-three"]
            },
            {
                title: "Topic Two",
                channels: ["channel-one", "channel-two", "channel-three"]
            },
            {
                title: "Topic Three",
                channels: ["channel-one", "channel-two", "channel-three"]
            }
        ],

    },
    {
        name: "Asexual",
        image: Ace,
        membersOnline: 8,
        totalMembers: 883,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        topics: [
            {
                title: "Topic One",
                channels: ["channel-one", "channel-two", "channel-three"]
            },
            {
                title: "Topic Two",
                channels: ["channel-one", "channel-two", "channel-three"]
            },
            {
                title: "Topic Three",
                channels: ["channel-one", "channel-two", "channel-three"]
            }
        ],

    },
    {
        name: "Bisexual",
        image: Bi,
        membersOnline: 89,
        totalMembers: 1571,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        topics: [
            {
                title: "Topic One",
                channels: ["channel-one", "channel-two", "channel-three"]
            },
            {
                title: "Topic Two",
                channels: ["channel-one", "channel-two", "channel-three"]
            },
            {
                title: "Topic Three",
                channels: ["channel-one", "channel-two", "channel-three"]
            }
        ],

    },
    {
        name: "Gay",
        image: Gay,
        membersOnline: 239,
        totalMembers: 3793,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        topics: [
            {
                title: "Topic One",
                channels: ["channel-one", "channel-two", "channel-three"]
            },
            {
                title: "Topic Two",
                channels: ["channel-one", "channel-two", "channel-three"]
            },
            {
                title: "Topic Three",
                channels: ["channel-one", "channel-two", "channel-three"]
            }
        ],

    },
    {
        name: "Lesbian",
        image: Lesbian,
        membersOnline: 187,
        totalMembers: 2997,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        topics: [
            {
                title: "Topic One",
                channels: ["channel-one", "channel-two", "channel-three"]
            },
            {
                title: "Topic Two",
                channels: ["channel-one", "channel-two", "channel-three"]
            },
            {
                title: "Topic Three",
                channels: ["channel-one", "channel-two", "channel-three"]
            }
        ],

    },
    {
        name: "Chicago",
        image: Chicago,
        membersOnline: 48,
        totalMembers: 1716,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        topics: [
            {
                title: "Topic One",
                channels: ["channel-one", "channel-two", "channel-three"]
            },
            {
                title: "Topic Two",
                channels: ["channel-one", "channel-two", "channel-three"]
            },
            {
                title: "Topic Three",
                channels: ["channel-one", "channel-two", "channel-three"]
            }
        ],

    },
    {
        name: "Krafty Kweers",
        image: Krafty,
        membersOnline: 203,
        totalMembers: 2254,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        topics: [
            {
                title: "Topic One",
                channels: ["channel-one", "channel-two", "channel-three"]
            },
            {
                title: "Topic Two",
                channels: ["channel-one", "channel-two", "channel-three"]
            },
            {
                title: "Topic Three",
                channels: ["channel-one", "channel-two", "channel-three"]
            }
        ],

    },
    {
        name: "NYC",
        image: NYC,
        membersOnline: 97,
        totalMembers: 2501,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        topics: [
            {
                title: "Topic One",
                channels: ["channel-one", "channel-two", "channel-three"]
            },
            {
                title: "Topic Two",
                channels: ["channel-one", "channel-two", "channel-three"]
            },
            {
                title: "Topic Three",
                channels: ["channel-one", "channel-two", "channel-three"]
            }
        ],

    },
    {
        name: "L.A.",
        image: LA,
        membersOnline: 94,
        totalMembers: 3759,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        topics: [
            {
                title: "Topic One",
                channels: ["channel-one", "channel-two", "channel-three"]
            },
            {
                title: "Topic Two",
                channels: ["channel-one", "channel-two", "channel-three"]
            },
            {
                title: "Topic Three",
                channels: ["channel-one", "channel-two", "channel-three"]
            }
        ],

    },
    {
        name: "LGBTQIA+ in Tech",
        image: Tech,
        membersOnline: 89,
        totalMembers: 2652,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        topics: [
            {
                title: "Topic One",
                channels: ["channel-one", "channel-two", "channel-three"]
            },
            {
                title: "Topic Two",
                channels: ["channel-one", "channel-two", "channel-three"]
            },
            {
                title: "Topic Three",
                channels: ["channel-one", "channel-two", "channel-three"]
            }
        ],

    },
    {
        name: "Activism",
        image: Activism,
        membersOnline: 25,
        totalMembers: 2091,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        topics: [
            {
                title: "Topic One",
                channels: ["channel-one", "channel-two", "channel-three"]
            },
            {
                title: "Topic Two",
                channels: ["channel-one", "channel-two", "channel-three"]
            },
            {
                title: "Topic Three",
                channels: ["channel-one", "channel-two", "channel-three"]
            }
        ],

    },
    {
        name: "Mental Health",
        image: MentalHealth,
        membersOnline: 25,
        totalMembers: 1765,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        topics: [
            {
                title: "Topic One",
                channels: ["channel-one", "channel-two", "channel-three"]
            },
            {
                title: "Topic Two",
                channels: ["channel-one", "channel-two", "channel-three"]
            },
            {
                title: "Topic Three",
                channels: ["channel-one", "channel-two", "channel-three"]
            }
        ],

    }
];

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