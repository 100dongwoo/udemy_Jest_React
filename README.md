### TDD(Test-Driven Development) 테스트주도개발
- 코드작성전 테스트작성 후 테스트에 통과하도록 코드 작성


## CH2
- https://testing-library.com/docs/user-event/install
- npm list @testing-library/user-event (13.5 버전을 14.4로 업그레이드함)
- npm install --save-dev @testing-library/user-event


- fireEvent: 컴퓨터 이벤트를 시뮬레이션
- userEvent : 실제 사용자 상호작용에 대해 보다 완전한 시뮬레이션 제공 <pre>promise를 항상 return 한다 : await 필수 </pre>


### Screen Query Methods

#### command[All] By QueryType

##### Command

- get : 요소가 DOM 내부에 있을경우 expect
- query : 요소가 DOM 내부에 있지 않을 경우 expect
- find : 요소가 비동기적으로 나타날경우 expect


##### All : 포함시키거나 포함 시키지 않는 부분
- (exclude) :  오직 1개의 match expect
- (include) :  1개이상 match expect

##### QueryType (무엇으로 검색하는지)
- Role : 가장 선호 
- AltText : 이미지
- Text : display elements
- Form elements
1. PlaceholderText  
2. LabelText 
3. DisplayValue  

![](https://velog.velcdn.com/images/100dongwoo/post/e4fb862b-1520-405d-b21f-b2bf34653abe/image.png)



## Ch3
- https://mswjs.io/docs/getting-started/integrate/node
- 일반적으로 비동기필요시 await 와 findAllRole 사용해야함
