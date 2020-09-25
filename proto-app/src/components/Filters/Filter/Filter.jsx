import React, { useState } from "react";
import { FormControl, FormLabel, FormGroup } from "@material-ui/core";

import CheckboxItem from "../../UI/Checkbox/Checkbox";

import classes from "./Filter.module.scss";

const Filter = ({ type, filterName, checkboxList, style }) => {
	const [, setSelectedValue] = useState("");

	const handleChange = (value) => {
		setSelectedValue(value);
	};

	const checkboxes = checkboxList.map(({ id, type, head, name }) => {
		return (
			<CheckboxItem
				key={id}
				type={type}
				label={head}
				name={name}
				onHandleChange={(evt) => handleChange(evt.target.value)}
			/>
		);
	});

	return (
		<FormControl component="fieldset" className={classes.Filter}>
			<FormLabel component="legend">{filterName}</FormLabel>
			<FormGroup
				className={classes.formGroup}
				style={{ flexDirection: "row" }}
			>
				{checkboxes}
			</FormGroup>
		</FormControl>
	);
};

export default Filter;