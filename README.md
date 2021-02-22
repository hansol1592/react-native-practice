# react-native-practice

## build issue

### Android

- android/gradle/wrapper/gradle-wrapper.properties
  - `distributionUrl=https\://services.gradle.org/distributions/gradle-6.3-all.zip` 으로 명시. 기존에는 `6.2` 로 되어있음.
- android 폴더에 local.properties 파일 생성
  - `sdk.dir = /Users/<USERNAME>/Library/Android/sdk` 추가
- 안드로이드 장치 버전 문제
  - 'Q API Level 29 image' 의 장치가 필요한데 'R' 버전이 설치되어 있었음.

### IOS

- ios 내부 Flipper-Folly 라이브러리의 버전 문제
  - `use_flipper` 의 버전을 명시하고, pod 을 업데이트 하여 해결하였습니다.
  - 절차
    - ios 폴더 내부 Profile 파일에서 `use_flipper!` 을 `use_flipper!({ 'Flipper-Folly' => '2.3.0' })` 와 같이 변경합니다.
    - ios 폴더 내부로 들어가 pod 을 업데이트 합니다.
      - cd ios
      - pod install
      - pod update
    - 폴더 외부로 나와 다시 ios 를 실행합니다.
      - cd.. && npx react-native run-ios

### Splash

- splash 생성
  - react-native-make
    - react-native-make 설치
    - `react-native set-splash --path ./src/assets/images/Splash.png --resize center --background "#FFFFFF"` 와 같은 명령어로 생성
  - ios
    - Storyboard 설정
      - ./ios/[Project Name].xcwrokspace 파일을 선택해 Xcode 실행
