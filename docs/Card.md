---
id: Card
title: Card
sidebar_label: Card
---

Simple Card component

![Card_example](assets/images/Card.png)


## Usage

```js 
import React from 'react'
import { Text } from 'react-native'
import { Card } from 'nottinderuikit'

const SimpleCard = () => {
  return <Card>
    <Text>Hey you!, yes you, have a nice day !</Text>
  </Card>
}
export default SimpleCard
```

---

## Props

- [`children`](#children)

---
## Reference


### `children`

The components we want to wrap into the Card

|  Type     | Default       | Required |
| :-------: | :-----------: | :------: |
| ReactNode |   undefined   |  false    |
