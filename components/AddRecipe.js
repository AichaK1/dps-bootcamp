import Link from "next/link";
import React, { useState } from "react";
import { Form, FormInput, Input } from "semantic-ui-react";
import { ImageComponent } from "./ImageComponent";

export const AddRecipe = () => {
  const [inputs, setInputs] = useState(["input-0"]);
  const [steps, setSteps] = useState(["step-0"]);
  const [name, setName] = useState("String")
  const appendInput = () => {
    var newInput = `input-${inputs.length}`;
    // setInputs(prevState => ({ inputs: prevState.inputs.concat([newInput]) }));
    setInputs(inputs.concat([newInput]));
  };

  const appendStep = () => {
    var newInput = `step-${steps.length}`;
    // setInputs(prevState => ({ inputs: prevState.inputs.concat([newInput]) }));
    setSteps(steps.concat([newInput]));
  };

  const handleClick = () => {
    console.log("handleClick", name);
    
    localStorage.setItem('recipeName', name);
  };

  const getValue = () => {
    console.log(localStorage.getItem('recipeName'));
    return JSON.parse(localStorage.getItem('recipeName'));
  }

  return (
    <div display="block" style={{ padding: 100 }}>
      <div>
        <Form>
          <div className="field">
            <label> Add Recipe Name </label>
            <div className="ui  input">
              <input type="text"  onChange={(e) => {setName(e.currentTarget.value)}} placeholder=" Recipe Name" />
            </div>
          </div>
          <div className="field">
            <label> Preparation time </label>
            <div className="ui  input">
              <input
                type="number"
                placeholder="add the time needed in minutes"
              />
            </div>
          </div>
          <div>
            {" "}
            <label> Recipe Description </label>{" "}
          </div>
          {steps.map((step) => (
            <FormInput type="text" key={step} />
          ))}
          <button class="ui positive basic button" onClick={() => appendStep()}>
            +
          </button>
          <div className="field">
            <label> How would you rank the difficulty out of 10 </label>
            <div class="ui  input">
              <input type="number" placeholder="Descripe each step :D " />
            </div>
          </div>
          <div>
            {" "}
            <label> Add Ingredients </label>{" "}
          </div>
          {inputs.map((input) => (
            <FormInput type="text" key={input} />
          ))}
          <button
            class="ui positive basic button"
            onClick={() => appendInput()}
          >
            +
          </button>
          <ImageComponent></ImageComponent>
          <div>
            <button onClick={() => handleClick()}  class="ui positive basic button block">
              Add recipes
            </button>
          </div>

        </Form>
        <Link href='/'>
          <button  class="ui  basic button block">
            Back
          </button>
        </Link>
      </div>
      Name displayed here:
      <div>
        {getValue}
      </div>
    </div>
  ); 
};
