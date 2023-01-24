# react-native-Register
Register a great way to verifiy the user with their e-mail address,phone number, first and last name and Password. Register page can contain images, buttons, text and more.Register page is mainly used for authenticate the user with their Details.
## Table of Content
- [Features](#features)
- [Installation](#installation)
- [API reference](#api-reference)
- [Result](#Result)
## Features
Add a featured subtitle to the Register. This, Receives all Text, Image, Button And input props.
To add the react-native-Register to React Native app, run this command with tag version
```
npm install https://github.com/CraftCodersInfotech/register-component.git
```
Make sure to install pod into react-native Project after linking given command
## API reference
### Register
| Name | Type      | Description          |
| ---- | --------- | -------------------- |
| data | InputData | props to render Data |
| source | ImageSourcePropType | Path of image |
| imagestyle | StyleProp<ImageStyle> | Prop to give style to image |
| headingLabel | string | Add text under image |
| headingLabelStyle | StyleProp<TextStyle> |prop to give style to text under image |
| ShowLabel | boolean | To show the label upon input-field |
| inputLabelStyle | StyleProp<TextStyle> | prop to style  the label upon input-field |
| inputContainer | StyleProp<ViewStyle> | prop to style  the input-field |
| maxLength | number | add to allow user enter limited data |
| buttonContainer | StyleProp<ViewStyle> | Prop to style the button View |
| buttonLabel | string | Add text in button |
| buttonLabelStyle | StyleProp<TextStyle> | Prop to style the text in button |
| backgroundColor | string | inactive color of button |
| activeBackgroundColor | string | active color of "login" button |
| belowButtonView | React.ReactNode | User can add view or text |
| descriptionLabel | string | Add text in-place of "Already have an account?" |
| descriptionLabelStyle | StyleProp<TextStyle> | Prop to style the description text |
| highlightedLabel | string | Add text in-place of "login" |
| highlightedLabelStyle | StyleProp<TextStyle> | Prop to style the highlighted text |
| highlightedLabelPress | () => void | onPress for highlighted text|

## Result
![Screenshot 2022-12-07 at 11 37 37 AM](https://user-images.githubusercontent.com/24438876/206101510-76c26c9f-ca60-4282-9ce0-9e0185f1f483.png)
![Screenshot 2022-12-07 at 11 37 57 AM](https://user-images.githubusercontent.com/24438876/206101569-84fd1683-9971-41b7-9383-33c034df642d.png)
