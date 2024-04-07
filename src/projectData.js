const projects = [
  {
    title: "Farm Farm",
    image: "./images/farmfarm-mockup",
    description: "농산물 펀딩 및 경매 플랫폼. 소규모 투자자와 농부와의 만남!",
    tools: ["Spring FW", "MyBatis", "JSP", "MariaDB", "API", "AWS"],
    github: "https://github.com/FarmFarm-1/FarmFarm_Develop",
    link: "https://farmfarm.duckdns.org/",
    date: "2023.11 ~ 2023.12 (5인)",
    page: [
      {
        image: "./images/farmfarm",
        description:
          "팜팜 : 생산비 부담을 줄이고 싶은 농부와 시드머니가 부족한 펀딩 참여자를 위한 농산물 펀딩 및 경매 플랫폼",
        function:
          "농부&투자자 대상 / 영농 자금 확보 & 합리적인 가격의 농산물 제공 & 판매 경로 확보 목적",
        tools: [
          "로그인/회원가입(이메일 이증, 휴대폰 인증)",
          "펀딩 및 경매(파머: 상품등록, 서포터: 투자 및 경매 입찰)",
          "마이페이지(파머: 펀딩 상품의 경작상태 업데이트, 서포터: 펀딩 상품의 경작 상태 확인)",
          "공통기능(포인트 충전, 계좌 등록, 채팅, 경매 종료에 따른 펀딩 수익 분배)",
        ],
        etc: [
          "경매 및 마이페이지 기능(포인트 충전, 계좌 인증)",
          "농산품 프로세스의 PL/SQL 작성",
          "농산물 일일 시세 데이터 누적",
          "클라우드 배포",
        ],
      },
      {
        image: "./images/auction",
        description: "경매 페이지",
        function: "동일 입찰 제어가 적용된 경매 기능, 찜하기 기능",
        tools: "Spring Transaction & Exception Handler, Javascript",
        etc: [
          "경매 참여자의 보유 포인트 및 최고가 입찰 여부 체크 후, 입찰 성공 또는 실패 전달.",
          "입찰 불가능 경우, Runtime Exception을 상속받은 클래스를 정의하여, 입찰 중단 처리.",
          "입찰 가능 경우, Transaction으로 point 차감 및 최고 입찰자 등록 진행",
        ],
      },
      {
        image: "./images/plsql",
        description: "농산품 프로세스 처리",
        function:
          "펀딩 실패&성공, 농산품 경작상태, 경매 실패&성공, 경매 수익금 정산",
        tools: "PLSQL Trigger, Event Scheduler",
        etc: [
          "Trigger를 이용하여 농산품 펀딩 총금액 Update 등을 감지하며 상태 수정",
          "Scheduler를 이용하여 펀딩 및 경매의 만료일에 조건 달성 여부 체크",
          "Scheduler와 Cursor를 이용하여 상품의 정산이 되지 않은 경매완료 상품 탐색, 상태 변경 및 수익금 배분",
        ],
      },
      {
        image: "./images/crops",
        description: "농작물 시세 일일 누적",
        function: "경매 참여에 유익한 농산물 시세 정보 전달",
        tools: "Spring Scheduler, 한국농수산식품유통공사 API",
        etc: [
          "Spring Scheduler를 활용하여 Cron을 이용한 농산물 시세에 대하여 일일 누적",
          "입찰 시, 해당 금액 기준 전국 도매 시세 대비 손익률 등 정보 전달",
        ],
      },
      {
        image: "./images/charge",
        description: "포인트 충전",
        function: "결제 API 사용하여 포인트 충전",
        tools: "PortOne 결제 API, Javascript",
        etc: ["결제 금액 입력 또는 클릭하여 구매할 포인트에 대해 결제"],
      },
      {
        image: "./images/address",
        description: "계좌 인증 및 등록",
        function: "펀딩 및 경매 수익 분할에 필요한 계좌 인증 및 등록",
        tools: "PortOne 가상계좌 API, Javascript",
        etc: [
          "개인 개발자는 계좌인증 API 사용불가로, 가상 계좌 API를 이용하여 계좌 인증",
          "회원 가입 시, 인증했던 사용자 실명 인증과 함께 계좌 신뢰성 확보",
          "API 호출 시, 먼저 Access Token을 발급받아 Bearer Type 인증 헤더에 담아 호출",
        ],
      },

      {
        image: "./images/server",
        description: "배포",
        function: "클라우드를 이용하여 서비스 배포",
        tools: "AWS EC2, Apache2, Tomcat9",
        etc: [
          "Ubuntu OS인 EC2 인스턴스에 웹서버 Apache2, WAS Tomcat9 사용",
          "letsEncrypt를 사용하여 HTTPS 활성화와 DNS 등록",
          "Http접근에 대하여 Rewrite Engine 활성화하여, 443 포트로 리다이렉트",
          "클라이언트의 모든 요청에 대하여, Mod Proxy를 사용하여 Tomcat으로 프록시",
          "DNS 사용하여 도메인 등록",
        ],
      },
      {
        image: "./images/sweet",
        description: "none",
        function: "none",
        tools: "none",
        etc: [
          "1. Spring Scheduler 이중 호출 발생 : 서버의 WAS 설정에 따라 한개의 Host에서 appBase와 docBase가 같은 경로 참조",
          "Tomcat에서 동일한 Web Application Context가 두개 동작. 프로젝트 한개는 꺼지지만, 스케줄러는 유지. docbase 수정을 통하여 문제 해결",
          "2. NodeJS 어플리케이션을 스프링 연결, AWS EC2 사용을 통한 Proxy 개념 학습",
          "3. Basic 인증과 Bearer 인증의 차이점 학습 : API 서버의 사용자 보관 여부, 권한 제어",
        ],
      },
    ],
  },
  {
    title: "Pay Board",
    image: "./images/payboard-mockup",
    description: "카드 결제 데이터의 분석 및 대시보드",
    tools: ["Spring Boot", "React", "JPA", "MariaDB", "Azure", "CICD"],
    github: "https://github.com/CardVisor/BackEnd",
    link: "https://payboard.azurewebsites.net/main",
    date: "2024.01 ~ 2024.02 (5인)",
    page: [
      {
        image: "./images/payboard-mockup",
        description:
          "페이보드 : Pay + DashBoard : 신용카드 결제, 고객 및 혜택 관련 데이터를 다양한 차트 이용으로 대시보드 방식의 분석 및 시각화 서비스",
        function:
          "결제 데이터 기반, 데이터의 군집별 인사이트 제공 / 카드사 직원 대상, 인사이트 제공 목적",
        tools: [
          "메인 : 결제 추이, 사용자 변화, 결제금액 기준 카드 Top5 등",
          "해외결제 : 국가별 결제 내역의 세계 지도화, 상세 내역 조회",
          "고객 : 커스텀 필터링 기능(주 사용카드 및 소비처 정보 제공)",
          "카드 : 카드별 소비 그래프, 요약 데이터 제공, 일대일 카드비교",
          "혜택 : 상위 사용률 혜택 정보, 혜택 조합 및 혜택 가치에 대한 순위 비교",
        ],
        etc: ["혜택 파트"],
      },
      {
        image: "./images/benefit",
        description: "Benefit 군집 데이터",
        function: "결제 데이터 중, Benefit 군집에 대한 분석",
        tools: "JPQL, Javascript, Amchart5, ChakraUI",
        etc: [
          "결제 적용된 혜택의 사용처 기준 정보 제공",
          "12개의 사용처 중, 상위 사용률의 혜택 시각화",
          "각 사용처의 혜택 관련, 누적금액 & 연관 카드 데이터 등 정보 제공",
        ],
      },
      {
        image: "./images/querydsl",
        description: "필터링된 고객의 사용처별 상위 사용율 혜택 제공",
        function: "결제 데이터 중, Benefit 군집에 대한 분석",
        tools: "QueryDsl, Javascript, Amchart5, ChakraUI",
        etc: [
          "동적인 고객 정보 필터 입력을 위한 QueryDSL 사용",
          "QueryDSL 사용을 위한 Q Domain 활성화",
        ],
      },
      {
        image: "./images/recommend",
        description: "혜택 가치를 금액으로 연간 가치 산출 후, 평가",
        function:
          "Drag&Drop으로 혜택 조합, 조합된 혜택 가치와 신한카드와의 비교 순위 제공",
        tools: "React-beautiful-dnd, Javascript",
        etc: [
          "React-beautiful-dnd을 사용한 Drag And Drop으로 개별 혜택을 특정 영역으로 이동",
          "개별 혜택의 결제에서 사용된 적용률과 적립율을 기반으로 가치 계산",
          "혜택 가치 : (해당 혜택이 적용된 건수) * (해당 혜택을 포함한 카드의 총 결제 건수) * 혜택률 * 기준 금액",
          "산출된 연간 혜택 가치를 기존 카드와 순위 비교 후, 신규 카드 제작을 위한 인사이트로 활용",
        ],
      },
      {
        image: "./images/cicd",
        description: "서비스의 CICD 구현",
        function: "코드의 GitHub merge 부터 Azure 배포 프로세스 구현",
        tools: "GitAction, Docker, Azure Container Registry & App service",
        etc: [
          "GitAction의 workflow를 이용하여 GitHub 레포지토리에 merge 되는 순간 CICD 프로세스 동작",
          "빌드 결과물을 DockerFile을 통하여 Dockerize 하여 Azure Container Registry로 push",
          "Azure Container Registry와 App service 설정을 통하여, 새로운 Docker 이미지가 Push되면 서버로 Push",
          "Azure App Service는 어플리케이션의 Port 1개만 노출이 가능하여, 2개의 서버로 운영",
        ],
      },
      {
        image: "./images/payboard",
        description: "none",
        function: "none",
        tools: "none",
        etc: [
          "1. 개발환경과 배포환경에서의 proxy 차이",
          "2. CICD 구현 중, 빌드&테스트패키지 설정을 통해 지속적 배포 개념을 직접 체험",
          "3. Azure 서버 활용 과정에서 port 1개만 노출이 가능한 점을 해결하며, Azure의 App service는 PAAS에 가까운 서비스임을 경험",
        ],
      },
    ],
  },
];

export default projects;
