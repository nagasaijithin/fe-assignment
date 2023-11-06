import React from "react";
import { Card, Grid, Typography } from "@mui/material";
import { ReactComponent as Attachment } from "../icons/attachment.svg";
export default function ProductLandingPage({ data }) {
  console.log(data, "data");
  const {
    description_long,
    keywords,
    minimum_order_quantity,
    attachments,
    features,
    unit,
    currency,
    transport_costs,
    delivery_time,
    price_breaks,
  } = data.article;

  return (
    <div className="detailsWrapper">
      <div>
        <Typography className="titles">DESCRIPTION</Typography>
        <Typography className="description">{description_long}</Typography>

        <Grid container spacing={0} className="productDetailsCardWrapper">
          <Grid item xs={4}>
            <Card>
              <Typography className="titles">details</Typography>
              <hr />
              <div>
                <Typography className="subtitles">Features</Typography>
                <ul>
                  {Object.keys(features).map((each) => {
                    return (
                      <li>
                        <span className="subtitles">{each}:</span>{" "}
                        {features[each]}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div>
                <Typography className="subtitles">Attachments</Typography>
                <div className="attachListWrapper">
                  {attachments.map((eachElement) => {
                    return (
                      <a href={eachElement.file_link} download>
                        <Attachment /> {eachElement.file_name}
                      </a>
                    );
                  })}
                </div>
              </div>
              <div>
                <Typography className="subtitles">Keywords</Typography>
                <div className="chipsWrapper">
                  {keywords.map((each, index) => {
                    return <div key={`${each}-${index}`}>{each}</div>;
                  })}
                </div>
              </div>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <Typography className="titles">Pricing & shipping</Typography>
              <hr />
              <div>
                <ul>
                  <li>
                    <span className="subtitles">Minimum order:</span>
                    {minimum_order_quantity} {` ${unit}`}
                  </li>
                  <li>
                    <span className="subtitles">Shipping:</span>{" "}
                    {transport_costs}
                    {` ${currency}`}
                  </li>
                  <li>
                    <span className="subtitles">Delivery:</span>{" "}
                    {`${delivery_time} `}
                    days
                  </li>
                </ul>
              </div>
              <div className="priceBreaksWrapper">
                <Typography className="subtitles">Price breaks</Typography>
                {Object.keys(price_breaks).map((each) => {
                  return (
                    <div>
                      <div>
                        ex {each} {` ${unit}`}
                      </div>
                      <div>
                        {price_breaks[each]} {` ${currency}/${unit}`}
                      </div>
                    </div>
                  );
                })}
                <div></div>
              </div>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
