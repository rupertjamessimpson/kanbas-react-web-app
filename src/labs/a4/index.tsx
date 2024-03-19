import React from "react";
import ClickEvent from "./ClickEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponenet from "./ParentStateComponent";
import ReduxExamples from "./ReduxExamples";
import store from "./store";
import { Provider } from "react-redux";

const Assignment4 = () => {
    function sayHello() {
        alert("Hello");
    }

    return(
    <>
        <Provider store={store}>
            <h1>Assignment 4</h1>
            <ClickEvent />
            <PassingFunctions theFunction={sayHello} />
            <EventObject />
            <Counter />
            <BooleanStateVariables />
            <StringStateVariables />
            <DateStateVariable />
            <ObjectStateVariable />
            <ArrayStateVariable />
            <ParentStateComponenet />
            <ReduxExamples />
        </Provider>
    </>
    );
};

export default Assignment4;