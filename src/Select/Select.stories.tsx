import React, {useState} from "react";

import {action} from "@storybook/addon-actions";
import {Select} from "./Select";

export default {
    title:'Select',
    component:Select,
}


export const SelectStories = () => {
  const [value,setValue] = useState(2)
    return(
    <Select onChange={setValue} value={value}
            items={[{value: 1, title: 'Dimitch'},
                {value: 2, title: 'Viktor'},
                {value: 3, title: 'Andre'}
            ]}
/>)
}

/*
export const WithoutValue = () => <Select onChange={action('This Select')}
        items={[{value: 1, title: 'Dimitch'}, {value: 2, title: 'Viktor'}, {value: 3, title: 'Andre'}]}
/>*/

