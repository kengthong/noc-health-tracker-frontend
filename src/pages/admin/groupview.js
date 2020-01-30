import React from 'react';
import styled from 'styled-components';
import { Container, Avatar } from '@material-ui/core';
import { forwardRef } from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AlarmIcon from '@material-ui/icons/Alarm';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import MaterialTable from 'material-table';

import {
    AddBox,
    ArrowUpward,
    Check,
    ChevronLeft,
    ChevronRight,
    Clear,
    DeleteOutline,
    Edit,
    FilterList,
    FirstPage,
    LastPage,
    Remove,
    SaveAlt,
    Search,
    ViewColumn,
  } from '@material-ui/icons';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
      <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

const GroupViewContainer = styled(Container)`
    font-family: roboto;
    padding:10px;
    width:100%;
`;

const StyledAvatar = styled(Avatar)`
    float: right;
    height: 70px;
    width: 20%;
`;

const GroupInfo = styled.div`
    width:100%;
`;

const StyledTitle = styled.text`
  font-weight: 900;
  font-size: xx-large;
`;

const ActionButtonGroup = styled.div`
    width:100%
`;

const StyledSubtitle = styled.text`
  font-weight: 600;
  font-size: large;
  padding-bottom: 20px;
`;

const StyledDataText = styled.text`
    font-weight: 500;
    font-size: medium;
`;
/**
 * To call, <groupViewPage group={group}/>
 */
export default class GroupViewPage extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        group: { 
            name: "Class-3A",
            organisation: "Tembusu Secondary School"
        },
        columns: [
            { title: 'Name', field: 'name' },
            { title: 'Reported Today', field: 'reported' },
            { title: 'Sick', field: 'sick' },
          ],
        data: [{
            "name": "kukubird",
            "reported": "Nah",
            "sick":"sick"
        }]
      };
  }

  componentDidMount = () => {};

  updateStatus = status => {
    console.log(status);
    this.setState({
      status: status,
    })
  }

  render() {
    const { group, columns, data } = this.state;
    return (
      <GroupViewContainer max-width='xs'>
        <GroupInfo>
            <StyledAvatar sizes="1500" variant="rounded">3A</StyledAvatar>
            <StyledTitle>{group.name}</StyledTitle> <br/>
            <StyledSubtitle>{group.organisation}</StyledSubtitle><br/>
        </GroupInfo>
        
        <ActionButtonGroup>
            <IconButton color="primary">
                    <DeleteIcon />
            </IconButton>
            <IconButton color="secondary" >
                <AlarmIcon />
            </IconButton>
            <IconButton color="primary" >
                <AddShoppingCartIcon />
            </IconButton>
        </ActionButtonGroup>

        <StyledDataText> 1 Feeling Well </StyledDataText><br/>
        <StyledDataText> 2 Not Feeling Well </StyledDataText><br/> <br/>
        <StyledDataText> 1 Yet to respond </StyledDataText><br/>

        <MaterialTable
            title={group.name}
            columns={columns}
            data={data}
            options={{
                exportButton: true
              }}
            editable={{
            onRowAdd: newData =>
                new Promise(resolve => {
                setTimeout(() => {
                    resolve();
                    this.setState(prevState => {
                    const data = [...prevState.data];
                    data.push(newData);
                    return { ...prevState, data };
                    });
                //   this.handleTableAdd(newData);
                }, 600);
                }),
            onRowUpdate: (newData, oldData) =>
                new Promise(resolve => {
                setTimeout(() => {
                    resolve();
                    if (oldData) {
                    this.setState(prevState => {
                        const data = [...prevState.data];
                        data[data.indexOf(oldData)] = newData;
                        return { ...prevState, data };
                    });
                    }
                //   this.handleTableUpdate(newData, oldData);
                }, 600);
                }),
            onRowDelete: oldData =>
                new Promise(resolve => {
                setTimeout(() => {
                    resolve();
                    this.setState(prevState => {
                    const data = [...prevState.data];
                    data.splice(data.indexOf(oldData), 1);
                    return { ...prevState, data };
                    });
                //   this.handleTableDelete(oldData._id);
                }, 600);
                })
            }}
            icons={tableIcons}
        />
       </GroupViewContainer>
    );
  }
}