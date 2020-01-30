import React from 'react';
import styled from 'styled-components';
import { Container } from '@material-ui/core';
import { forwardRef } from 'react';
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


const GroupInfo = styled.div`
    width:100%;
    padding-bottom:50px;
`;

const StyledTitle = styled.text`
  font-weight: 900;
  font-size: xx-large;
`;


const StyledSubtitle = styled.text`
  font-weight: 600;
  font-size: large;
  padding-bottom: 20px;
`;

/**
 * To call, <groupViewPage group={group}/>
 */
export default class MembersAtRisk extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        organisation: "Tembusu Secondary School",
        groupsAtRisk: [
            { 
                name: "Class-3A",
                organisation: "Tembusu Secondary School"
            },
            { 
                name: "Class-3B",
                organisation: "Tembusu Secondary School"
            }
        ],
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


  render() {
    const { organisation, columns, groupsAtRisk, data } = this.state;
    return (
      <GroupViewContainer max-width='xs'>
        <GroupInfo>
            <StyledTitle>Members At Risk</StyledTitle> <br/>
            <StyledSubtitle>{groupsAtRisk.length} groups are at risk</StyledSubtitle>
        </GroupInfo>

        { groupsAtRisk.map((group, index) => {
            return (
                <div>
                    <StyledSubtitle>{group.name}</StyledSubtitle><br/>
                    <StyledSubtitle>{group.organisation}</StyledSubtitle><br/>
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
            </div>)
        })}

       </GroupViewContainer>
    );
  }
}