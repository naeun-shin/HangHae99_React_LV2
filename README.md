<h1> 💪TodoList 💪 by 나은</h1>
  - 배포 링크 :https://hh99-react-lv2-eight.vercel.app/

<h2> 컴포넌트 구조는 자유롭게 구현해보세요. 😀 </h2>
<h3> Components </h3>
   <h4>ㄴ button </h4>
     <h5> &nbsp; ㄴ Button.jsx => styleButton적용한 버튼 컴포넌트 </h5>
      <h5>  &nbsp; ㄴ ButtonFunction.jsx => 버튼 기능들을 모아둔 컴포넌트 </h5>
    <h4>  ㄴ todo </h4>
     <h5>    &nbsp; ㄴ TodoContent.jsx => todoList 출력 컴포넌트  </h5>
      <h5>  &nbsp; ㄴ TodoListSection.jsx => todoList의 working과 done을 분리한 컴포넌트  </h5>
  
---
## 튜터님 피드백 - 주혜 매니저님
1. 리덕스 액션 중에 todo의 isDone 상태를 업데이트 시키는 `IS_DONE`, `CANCEL` 리듀서는 하나로 만들어서 사용해 볼 수도 있을 것 같아요. 만약 추후에 todo의 상태가 true 또는 false 2개가 아닌 여러 개의 상태를 가질 수 있는 가능성을 고려하셨다고 해도 어차피 리듀서에서는 payload로 받은 새로운 상태를 그대로 사용하고 있기 때문에 UPDATE 리듀서 1개만 만들고, isDone 키 이름을 status 정도로 바꾸면 더 확장성에 좋을 것 같다는 생각이 듭니다.

2. 크게 중요한 건 아니지만 객체를 반환해주는 훅을 사용할 때는 바로 구조분해 할당을 사용할 수 도 있어요!
   ```javascript
   const params = useParams();
   const todoId = params.id;
   > const { id } = useParams();

3. '이전으로' 이동 버튼에 history('/')를 작성하셨는데 뒤로가기처럼 구현하기 위해서는 history(-1)로 작성해주셔야 해요. 만약 브라우저 주소창에 직접 url을 입력해서 페이지에 접근했다면 이전으로 버튼을 클릭했을 때 직전에 있었던 화면으로 이동해야 하지만 현재는 직전 페이지가 아닌 메인화면으로 이동하게 됩니다. 어떻게 상세 페이지에 접근했는지와 관계 없이 무조건 메인 화면으로 이동시키고 싶다면 '메인으로' 혹은 '목록으로' 등의 버튼 이름이 더 적합해 보여요.</P>
