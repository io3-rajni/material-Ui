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
                  style={{
                    margin: "0px",
                    display: "flex",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "800",
                      color: "darkBlue",
                    }}
                  >
                    City :
                  </Typography>
                  <Typography sx={{ fontWeight: "800", color: "black" }}>
                    {item?.address?.city}
                  </Typography>
                </Typography>
                <div>
                  <h4
                    style={{
                      margin: "0px",
                      color: "darkblue",
                      display: "flex",
                    }}
                  >
                    <Typography variant="subtitle">Name:</Typography>{" "}
                    <Typography sx={{ color: "black" }}>
                      {item?.firstName}
                    </Typography>
                  </h4>
                  <h4
                    style={{
                      margin: "0px",
                      color: "darkblue",
                      display: "flex",
                    }}
                  >
                    <Typography variant="subtitle">DOB:</Typography>
                    <Typography sx={{ color: "black" }}>
                      {item?.birthDate}
                    </Typography>
                  </h4>
                  <h4
                    style={{
                      margin: "0px",
                      color: "darkblue",
                      display: "flex",
                    }}
                  >
                    <Typography variant="subtitle">Email:</Typography>
                    <Typography sx={{ color: "black" }}>
                      {item?.email}
                    </Typography>{" "}
                  </h4>
                  <h4
                    style={{
                      margin: "0px",
                      color: "darkblue",
                      display: "flex",
                    }}
                  >
                    <Typography variant="subtitle"> Gender:</Typography>
                    <Typography sx={{ color: "black" }}>
                      {item?.gender}
                    </Typography>
                  </h4>
                  <h4
                    style={{
                      margin: "0px",
                      color: "darkblue",
                      display: "flex",
                    }}
                  >
                    <Typography variant="subtitle">Currency:</Typography>
                    <Typography sx={{ color: "black" }}>
                      {item?.bank?.currency}
                    </Typography>
                  </h4>
                  <h4
                    style={{
                      margin: "0px",
                      color: "darkblue",
                      display: "flex",
                    }}
                  >
                    <Typography variant="subtitle"> Card Number:</Typography>
                    <Typography sx={{ color: "black" }}>
                      {item?.bank?.cardNumber}
                    </Typography>
                  </h4>
                  <h4
                    style={{
                      margin: "0px",
                      color: "darkblue",
                      display: "flex",
                    }}
                  >
                    <Typography variant="subtitle"> Card Expire:</Typography>
                    <Typography sx={{ color: "black" }}>
                      {item?.bank?.cardExpire}
                    </Typography>
                  </h4>

                  <h4
                    style={{
                      margin: "0px",
                      color: "darkblue",
                      display: "flex",
                    }}
                  >
                    <Typography variant="subtitle" color="darkBlue">
                      UserAgent:
                    </Typography>
                    <Typography sx={{ color: "black" }}>
                      {item?.userAgent}
                    </Typography>
                  </h4>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </>
  );
}
