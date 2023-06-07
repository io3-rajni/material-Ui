import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useState } from "react";
export default function UiCard() {
  const [addData, setAddData] = useState([]);
  React.useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((res) => {
        setAddData(res?.data?.users);
        console.log("res", res);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {addData?.map((item, i) => {
          console.log("item", item);
          return (
            <Card
              sx={{
                maxWidth: 345,
                backgroundColor: "lavender",
                marginBottom: "15px",
                border: "1px solid blue",
                boxShadow: "0px 1px 2px 1px",
              }}
            >
              <CardMedia
                sx={{ height: 140 }}
                image={item?.image}
                title="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  style={{ margin: "0px", fontWeight: "800" }}
                >
                  City:{item?.address?.city}
                </Typography>
                <div>
                  <h4 style={{ margin: "0px", color: "darkblue" }}>
                    Name:{item?.firstName}
                  </h4>
                  <h4 style={{ margin: "0px", color: "darkblue" }}>
                    DOB:{item?.birthDate}
                  </h4>
                  <h4 style={{ margin: "0px", color: "darkblue" }}>
                    Email:{item?.email}
                  </h4>
                  <h4 style={{ margin: "0px", color: "darkblue" }}>
                    Gender:{item?.gender}
                  </h4>
                  <h5 style={{ margin: "0px", color: "darkblue" }}>
                    Currency:{item?.bank?.currency}
                  </h5>
                  <h5 style={{ margin: "0px", color: "darkblue" }}>
                    Card Number:{item?.bank?.cardNumber}
                  </h5>
                  <h5 style={{ margin: "0px", color: "darkblue" }}>
                    Card Expire:{item?.bank?.cardExpire}
                  </h5>
                </div>
                <Typography color="text.secondary">
                  userAgent:{item?.userAgent}
                </Typography>
              </CardContent>
              {/* <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions> */}
            </Card>
          );
        })}
      </div>
    </>
  );
}
