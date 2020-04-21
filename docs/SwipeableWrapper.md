---
id: SwipeableWrapper
title: SwipeableWrapper
sidebar_label: SwipeableWrapper
---

SwipeableWrapper 

## Usage


![SwipeableWrapper_example](assets/gifs/SwipeableWrapper.gif)


```js 
import React, { useState } from 'react'
import { View, Text, Animated } from 'react-native'
import { SwipeableWrapper, MediaCard } from 'nottinderuikit'

const SwipeableCard = () => {
  // Sample Array of images from Unsplash
  const images = [
    {
      uri:
        "https://images.unsplash.com/photo-1586470208442-67c5c1abbc78?ixlib=rb-1.2.1&auto=format&fit=crop&w=933&q=80",
    },
    {
      uri:
        "https://images.unsplash.com/photo-1516908205727-40afad9449a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=935&q=80",
    },
    {
      uri:
        "https://images.unsplash.com/photo-1586557009709-63ac91998176?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80",
    },
    {
      uri:
        "https://images.unsplash.com/photo-1520271348391-049dd132bb7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
    },
  ];
  // Here we manage the current image by it's index
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextImage = () => {
    // This circular loop on the images array
    setCurrentIndex((currentIndex + 1) % images.length);
  };
  // Here we create the initial Animated ValueXY
  const initialPosition = new Animated.ValueXY();
  // verticalCallback is called when the card is swiped up
  const verticalCallback = () => {
    console.log("verticalCallback");
    resetPosition();
  };
  // horizontalCallback is called when the card is swiped horizontally
  // Check isLeftToRight value to know in witch direction it was swiped
  const horizontalCallback = (isLeftToRight: boolean) => {
    if (isLeftToRight) {
      console.log("Is left to right");
    } else {
      console.log("Is right to left");
    }
    resetPosition();
  };

  // In this sample we use resetPosition to re use the same card for this examples
  const resetPosition = (delay: number = 0) => {
    Animated.timing(initialPosition, {
      toValue: { x: 0, y: 0 },
      duration: 250,
      delay,
    }).start();
  };


  return <View
    style={{
      height: "80%",
      width: "100%",
    }}
  >
    <SwipeableWrapper
      positionXY={initialPosition}
      verticalCallback={verticalCallback}
      horizontalCallback={horizontalCallback}
    >
      <MediaCard
        positionXY={initialPosition}
        leftLabel="Yup"
        rightLabel="Nope"
        downLabel="super yup"
        images={images}
        currentImageIndex={currentIndex}
        handleCurrentImageChange={nextImage}
        onBottomPress={() => {
          console.log("bottom press");
        }}
        bottomData={
          <Text style={{ color: "#FFF", fontWeight: "bold", fontSize: 20 }}>
            Swipe me !
              </Text>
        }
      />
    </SwipeableWrapper>
  </View>

}

export default SwipeableCard
```

---

## Props
  verticalCallback?: () => void;
  horizontalCallback?: (isLeftToRight: boolean) => void;
  children: ReactElement<any, any> | null;
  positionXY: Animated.ValueXY;


- [`children`](#children)
- [`positionXY`](#positionxy)
- [`verticalCallback`](#verticalcallback)
- [`horizontalCallback`](#horizontalcallback)

---
## Reference


### `children`

Component to make swipeable.

|  Type      | Default         | Required |
| :--------: | :-------------: | :------: |
| ReactNode  |  undefined      |  true   |

---

### `positionXY`

[Animated value of the position X Y.](https://reactnative.dev/docs/animated#valuexy)

|  Type                   | Default         | Required |
| :---------------------: | :-------------: | :------: |
| React.Animated.valueXY  |  undefined      |  true    |

---

### `verticalCallback`

Function called whtn the children component is swiped up.

|  Type                  | Default     | Required |
| :--------------------: | :---------: | :------: |
| function: ()=> any     |  ()=>{}     |  false   |

---

### `horizontalCallback`

Function called whtn the children component is swiped horizontally.
This function will be called with the `isLeftToRight` bolean param, telling us the direction of the swipe.

|  Type                                        | Default     | Required |
| :------------------------------------------: | :---------: | :------: |
| function: (isLeftToRight: boolean)=> any     |  ()=>{}     |  false   |
