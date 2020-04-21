---
id: CustomSwitch
title: CustomSwitch
sidebar_label: CustomSwitch
---

A tinder like switch 

![CustomSwitch_example](assets/gifs/CustomSwitch.gif)


## Usage

```js 
import React, { useState } from 'react'
import { CustomSwitch } from 'nottinderuikit'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const SampleSwitch = () => {
  const [switchValue, setSwitchValue] = useState(false);
  const toggleValue = () => setSwitchValue(!switchValue);
  const lefttIcon = (
    <MaterialCommunityIcons
      name='fire'
      size={40}
      color={switchValue ? '#cecece' : '#fe526a'}
    />
  );
  const rightIcon = (
    <MaterialCommunityIcons
      name='star-four-points'
      size={20}
      color={switchValue ? '#edba59' : 'white'}
    />
  );
  const handleChange = (isToggledRight: boolean) => {
    if (isToggledRight) {
      console.log('Toggled right');
    } else {
      console.log('Toggled left');
    }
    toggleValue();
  }

  return <CustomSwitch
    handleChange={handleChange}
    isToggledRight={switchValue}
    leftIcon={lefttIcon}
    rightIcon={rightIcon}
  />
}

export default SampleSwitch;
```

---

## Props

- [`isToggledRight`](#istoggledright)
- [`handleChange`](#handlechange)
- [`leftIcon`](#lefticon)
- [`rightIcon`](#righticon)

---
## Reference


### `isToggledRight`

State of the Switch 

|  Type     | Default       | Required |
| :-------: | :-----------: | :------: |
| boolean   |   undefined   |  true    |

---
### `handleChange`

Function called when the when the switch is pressed.

|  Type                                                  | Default       | Required |
| :----------------------------------------------------: | :-----------: | :------: |
| function: (nextIsToggledRightValue: boolan) => void    |   undefined   |  true    |

---
### `leftIcon`

Icon shown in the left side of the switch.

|  Type      | Default     | Required |
| :--------: | :---------: | :------: |
| ReactNode  |  undefined  |  true    |

---
### `rightIcon`

Icon shown in the right side of the switch.

|  Type      | Default         | Required |
| :--------: | :-------------: | :------: |
| ReactNode  |  undefined      |  false   |
