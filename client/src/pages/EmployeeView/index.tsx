import {
  Button,
  Card,
  CardContent,
  CardHeader,
  createStyles,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React, { Fragment } from 'react';
import { employeeData } from './testData';
import {
  ViewEmployeeType,
  EmployeeDepartmentType,
  AddressType,
  ProjectType,
  FormattedCardProp,
} from './types';

export const EmployeeView: React.FC = ({}) => {
  const {
    __typename: __typenameEmployee,
    id: employeeId,
    department,
    projects,
    employeeAddress,
    office,
    ...filteredEmployee
  } = employeeData.employee;

  const { __typename: __typeNameDepartment, ...spreadDepartment } = department!;
  const adjustedProjects = projects!.map((project) => {
    const {
      __typename: __typeNameProject,
      id: projectId,
      ...spreadProject
    } = project!;
    return spreadProject;
  });

  const {
    __typename: __typeNameEmployeeAddress,
    id: employeeAddresssId,
    ...spreadEmployeeAddress
  } = employeeAddress!;

  const adjustedEmployeeAddress = {
    ...spreadEmployeeAddress,
    state: spreadEmployeeAddress.state.abbreviation,
    country: spreadEmployeeAddress!.country?.name,
  };

  const {
    __typename: __typeNameOfficeAddress,
    id: typeNameOfficeId,
    ...spreadOfficeAddress
  } = office!.address;

  const adjustedOfficeAddress = {
    ...spreadOfficeAddress,
    state: spreadEmployeeAddress.state.abbreviation,
    country: spreadEmployeeAddress.country.name,
  };

  const classes = useStyles();
  return (
    <Fragment>
      <Typography variant="h5" className={classes.textSpacingBelow}>
        View Employee:
      </Typography>
      <FormattedCard
        cardHeaderText="Employeee Info:"
        cardHeaderActionButtonText="Edit"
        onEditButtonClick={() => {}}
        cardContentData={filteredEmployee as ViewEmployeeType}
      />
      <FormattedCard
        cardHeaderText="Department:"
        cardHeaderActionButtonText="Edit"
        onEditButtonClick={() => {}}
        cardContentData={spreadDepartment as EmployeeDepartmentType}
      />
      <FormattedCard
        cardHeaderText="Employee Address:"
        cardHeaderActionButtonText="Edit"
        onEditButtonClick={() => {}}
        cardContentData={adjustedEmployeeAddress as AddressType}
      />
      <FormattedCard
        cardHeaderText="Office Address:"
        cardHeaderActionButtonText="Edit"
        onEditButtonClick={() => {}}
        cardContentData={adjustedOfficeAddress as AddressType}
      />
      <FormattedCard
        cardHeaderText="Current Projects:"
        cardHeaderActionButtonText="Edit"
        onEditButtonClick={() => {}}
        cardContentData={adjustedProjects as Array<ProjectType>}
      />
    </Fragment>
  );
};

const useStyles = makeStyles(() =>
  createStyles({
    textSpacingBelow: {
      marginBottom: '0.5REM',
    },
    cardSpacing: {
      marginBottom: '1REM',
    },
    textSpacingAbove: {
      marginTop: '1REM',
    },
  }),
);

const addSpaceAndUpperCaseText = (key: string) =>
  key.replace(/([A-Z]|[0-9])/g, ' $1').replace(/^./, function (str) {
    return str.toUpperCase();
  }) + ':';

const FormattedCard = ({
  cardHeaderText,
  cardHeaderActionButtonText,
  onEditButtonClick,
  cardContentData,
}: FormattedCardProp) => {
  const classes = useStyles();
  return (
    <Card className={classes.cardSpacing}>
      <CardHeader
        title={<Typography variant="h6">{cardHeaderText}</Typography>}
        action={
          <Button onClick={onEditButtonClick}>
            {cardHeaderActionButtonText}
          </Button>
        }
      />
      <CardContent style={{ paddingTop: 0 }}>
        {!Array.isArray(cardContentData)
          ? Object.keys(cardContentData).map((key) => (
              <CardRow
                index={addSpaceAndUpperCaseText(key)}
                value={cardContentData[key]}
              />
            ))
          : cardContentData.map((object) =>
              Object.keys(object).map((key) => (
                <CardRow
                  index={addSpaceAndUpperCaseText(key)}
                  value={object[key]}
                />
              )),
            )}
      </CardContent>
    </Card>
  );
};

const CardRow = ({ index: key, value }: { index: string; value: string }) => {
  const classes = useStyles();
  return (
    <div className={classes.textSpacingBelow}>
      <Typography variant="subtitle2" gutterBottom>
        {key}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        {value}
      </Typography>
    </div>
  );
};
