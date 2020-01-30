import React from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

import FeelGoodPicture from '../../../assets/feelgood.jpeg';
import FeelBadPicture from '../../../assets/feelbad.jpg';

const ActionableGroup = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  padding:20px;
`;

const StyledTitle = styled.text`
  font-weight: 900;
  font-size: xx-large;
  padding-bottom: 20px;
`;

const FeelBadCard = styled.div`
  width: 47%; 
  float:right;
  padding-top: 20px;
`;

const FeelGoodCard = styled.div`
  width: 47%; 
  float:left;
  padding-top: 20px;
`;

export default class userMain extends React.Component {
  constructor(props) {
      super(props);
      this.state = {};
  }

  componentDidMount = () => {};

  render() {
    const { updateStatus } = this.props;
    return (
        <ActionableGroup>
          <StyledTitle>Today I feel...</StyledTitle>
          <div>

          <Tooltip title="If you feel any signs of ... bla bla bla, you are not feeling well!" arrow>
            <FeelGoodCard onClick={() => {updateStatus("good")}}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    image={FeelGoodPicture}
                    component="img"
                    height="180"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Good! 
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      I do not feel any symptoms such as Fever, Flu, Headache or diarrhoea!
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </FeelGoodCard>
            </Tooltip>

            <Tooltip title="If you feel any signs of ... bla bla bla, you are not feeling well!" arrow>
            <FeelBadCard onClick={() => {updateStatus("bad")}}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    image= {FeelBadPicture}
                    component="img"
                    height="180"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Bad! 
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      I don't feel so good, mr stark.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </FeelBadCard>
            </Tooltip>
          </div>
        </ActionableGroup>
    );
  }
}