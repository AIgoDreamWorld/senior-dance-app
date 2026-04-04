export interface Product {
  id: string;
  name: string;
  price: number;
  category: '라인댄스화' | '의류' | '가방/소품' | '보호대/기능성';
  subCategory: string;
  img: string;
  mallLink: string;
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  // --- 라인댄스화 (Line Dance Shoes) ---
  {
    id: 'ts-shoe-01',
    name: '[TS스포츠] 스포츠 댄스화+주머니 세트 (여성/남성/아동)',
    price: 22900,
    category: '라인댄스화',
    subCategory: '스니커즈',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20220921_125%2F1663734000000_12345%2Fimage.jpg&type=f320_320',
    mallLink: 'https://www.11st.co.kr/products/9224059060',
    rating: 4.8,
    reviews: 3208
  },
  {
    id: 'al-shoe-01',
    name: '알롱제 라인댄스화 재즈화 (메쉬 분리창)',
    price: 26900,
    category: '라인댄스화',
    subCategory: '재즈화',
    img: 'https://shopping-phinf.pstatic.net/main_8273617/82736173063.2.jpg',
    mallLink: 'https://search.shopping.naver.com/catalog/33607349956',
    rating: 4.82,
    reviews: 4366
  },
  {
    id: 'al-shoe-02',
    name: '알롱제 A1 라인댄스화 재즈운동화',
    price: 26900,
    category: '라인댄스화',
    subCategory: '스니커즈',
    img: 'https://shopping-phinf.pstatic.net/main_8162835/81628352054.jpg',
    mallLink: 'https://search.shopping.naver.com/catalog/28352054618',
    rating: 4.76,
    reviews: 1409
  },
  {
    id: 'mt-shoe-01',
    name: 'FU003 메트로 재즈 라운드 댄스화',
    price: 43000,
    category: '라인댄스화',
    subCategory: '재즈화',
    img: 'https://shopping-phinf.pstatic.net/main_8314125/83141254062.jpg',
    mallLink: 'https://search.shopping.naver.com/catalog/31412540623',
    rating: 4.81,
    reviews: 1328
  },
  {
    id: 'al-shoe-03',
    name: '알롱제 SM8 스트레치 스판 천슈즈',
    price: 17400,
    category: '라인댄스화',
    subCategory: '재즈화',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20230101_100%2F1672500000000_12345%2Fimage.jpg&type=f320_320',
    mallLink: 'https://search.shopping.naver.com/search/all?query=알롱제+SM8',
    rating: 4.93,
    reviews: 1290
  },
  {
    id: 'mt-shoe-02',
    name: 'DS575 메트로 프리미엄 재즈 스니커즈',
    price: 53000,
    category: '라인댄스화',
    subCategory: '스니커즈',
    img: 'https://shopping-phinf.pstatic.net/main_8283520/82835205461.jpg',
    mallLink: 'https://search.shopping.naver.com/search/all?query=DS575+메트로',
    rating: 4.71,
    reviews: 596
  },
  {
    id: 'al-shoe-04',
    name: '알롱제 A5 라틴댄스화 4cm 통굽',
    price: 27800,
    category: '라인댄스화',
    subCategory: '구두',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20230202_200%2F1675200000000_12345%2Fimage.jpg&type=f320_320',
    mallLink: 'https://search.shopping.naver.com/search/all?query=알롱제+A5',
    rating: 4.79,
    reviews: 219
  },
  {
    id: 'kd-shoe-01',
    name: '국내산 천연가죽 기본 재즈화',
    price: 54000,
    category: '라인댄스화',
    subCategory: '재즈화',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20230303_300%2F1677800000000_12345%2Fimage.jpg&type=f320_320',
    mallLink: 'https://search.shopping.naver.com/search/all?query=국내산+천연가죽+재즈화',
    rating: 4.73,
    reviews: 218
  },
  {
    id: 'sk-shoe-01',
    name: '스킬라 에어로빅화 방송댄스 운동화',
    price: 25900,
    category: '라인댄스화',
    subCategory: '스니커즈',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20230404_400%2F1680500000000_12345%2Fimage.jpg&type=f320_320',
    mallLink: 'https://search.shopping.naver.com/search/all?query=스킬라+에어로빅화',
    rating: 4.77,
    reviews: 145
  },
  {
    id: 'ts-shoe-02',
    name: '라라 재즈화 라인댄스 운동화 (TS스포츠)',
    price: 24500,
    category: '라인댄스화',
    subCategory: '스니커즈',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20230505_500%2F1683200000000_12345%2Fimage.jpg&type=f320_320',
    mallLink: 'https://www.11st.co.kr/products/9224059060',
    rating: 4.7,
    reviews: 85
  },

  // --- 의류 (Apparel) ---
  {
    id: 'ts-cloth-01',
    name: '[TS스포츠] 여성수영복 5종세트 (코디완성)',
    price: 35500,
    category: '의류',
    subCategory: '세트',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20230606_600%2F1685900000000_12345%2Fimage.jpg&type=f320_320',
    mallLink: 'https://www.11st.co.kr/products/1234567',
    rating: 4.6,
    reviews: 3742
  },
  {
    id: 'si-cloth-01',
    name: '1+1 SINA 발레/라인댄스 홀타이즈',
    price: 8400,
    category: '의류',
    subCategory: '연습복/탑',
    img: 'https://shopping-phinf.pstatic.net/main_8219018/82190184062.jpg',
    mallLink: 'https://search.shopping.naver.com/catalog/31901840623',
    rating: 4.85,
    reviews: 970
  },
  {
    id: 'el-cloth-01',
    name: '엘레바 5부 하이웨스트 숏레깅스',
    price: 12900,
    category: '의류',
    subCategory: '팬츠',
    img: 'https://shopping-phinf.pstatic.net/main_8184803/81848032054.jpg',
    mallLink: 'https://search.shopping.naver.com/catalog/28480320546',
    rating: 4.79,
    reviews: 828
  },
  {
    id: 'ab-cloth-01',
    name: '에어로빅/줌바 긴팔 니트 티셔츠 (라인댄스용)',
    price: 19000,
    category: '의류',
    subCategory: '상의',
    img: 'https://shopping-phinf.pstatic.net/main_8079018/80790184062.jpg',
    mallLink: 'https://www.11st.co.kr/products/2345678',
    rating: 4.6,
    reviews: 780
  },
  {
    id: 'sw-cloth-01',
    name: '여자 땀복 다이어트 세트 (댄스 연습용)',
    price: 16900,
    category: '의류',
    subCategory: '세트',
    img: 'https://shopping-phinf.pstatic.net/main_8069018/80690184062.jpg',
    mallLink: 'https://search.shopping.naver.com/search/all?query=다이어트+땀복+세트',
    rating: 4.75,
    reviews: 624
  },
  {
    id: 'el-cloth-02',
    name: '엘레바 셔링 힙업 보정 레깅스',
    price: 14900,
    category: '의류',
    subCategory: '팬츠',
    img: 'https://shopping-phinf.pstatic.net/main_8219018/82190184054.jpg',
    mallLink: 'https://search.shopping.naver.com/search/all?query=엘레바+레깅스',
    rating: 4.63,
    reviews: 598
  },
  {
    id: 'el-cloth-03',
    name: '엘레바 슬림 부츠컷 레깅스 (라인댄스 추천)',
    price: 22900,
    category: '의류',
    subCategory: '팬츠',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20230707_700%2F1688600000000_12345%2Fimage.jpg&type=f320_320',
    mallLink: 'https://search.shopping.naver.com/search/all?query=엘레바+부츠컷',
    rating: 4.79,
    reviews: 544
  },
  {
    id: 'ts-cloth-02',
    name: 'TS스포츠 스포츠 타이즈 UV차단',
    price: 8900,
    category: '의류',
    subCategory: '팬츠',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20230808_800%2F1691300000000_12345%2Fimage.jpg&type=f320_320',
    mallLink: 'https://www.11st.co.kr/products/3456789',
    rating: 4.7,
    reviews: 419
  },
  {
    id: 'el-cloth-04',
    name: '엘레바 무봉제 심리스 브라탑',
    price: 9900,
    category: '의류',
    subCategory: '상의',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20230909_900%2F1694000000000_12345%2Fimage.jpg&type=f320_320',
    mallLink: 'https://search.shopping.naver.com/search/all?query=엘레바+브라탑',
    rating: 4.72,
    reviews: 156
  },
  {
    id: 'zb-cloth-01',
    name: '줌바/라인댄스 힙스카프 스커트 (7컬러)',
    price: 14800,
    category: '의류',
    subCategory: '스커트',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20231010_100%2F1696700000000_12345%2Fimage.jpg&type=f320_320',
    mallLink: 'https://search.shopping.naver.com/search/all?query=라인댄스+힙스카프',
    rating: 4.65,
    reviews: 120
  },
  {
    id: 'el-cloth-05',
    name: '엘레바 조거팬츠 (댄스/요거/헬스)',
    price: 18900,
    category: '의류',
    subCategory: '팬츠',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20240303_333%2F1710200000000_12345%2Fimage.jpg&type=f320_320',
    mallLink: 'https://search.shopping.naver.com/search/all?query=엘레바+조거팬츠',
    rating: 4.81,
    reviews: 432
  },
  {
    id: 'ts-cloth-03',
    name: 'TS 기능성 쿨론 라운드 반팔 티셔츠',
    price: 6900,
    category: '의류',
    subCategory: '상의',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20240404_444%2F1712900000000_12345%2Fimage.jpg&type=f320_320',
    mallLink: 'https://www.11st.co.kr/products/7890123',
    rating: 4.75,
    reviews: 2105
  },
  {
    id: 'el-cloth-06',
    name: '엘레바 오프숄더 랩 가디건 (연습복)',
    price: 16500,
    category: '의류',
    subCategory: '상의',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20240505_555%2F1715600000000_12345%2Fimage.jpg&type=f320_320',
    mallLink: 'https://search.shopping.naver.com/search/all?query=엘레바+가디건',
    rating: 4.68,
    reviews: 87
  },
  {
    id: 'dm-cloth-01',
    name: '댄스몰 랩스커트 롱타입 (라인댄스용)',
    price: 13900,
    category: '의류',
    subCategory: '스커트',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20240606_666%2F1718300000000_12345%2Fimage.jpg&type=f320_320',
    mallLink: 'https://search.shopping.naver.com/search/all?query=댄스몰+랩스커트',
    rating: 4.88,
    reviews: 45
  },

  // --- 가방/소품 (Bags/Accessories) ---
  {
    id: 'ts-acc-01',
    name: '[TS스포츠] 스포츠양말 10켤레 묶음 (고탄력)',
    price: 9900,
    category: '가방/소품',
    subCategory: '소품',
    img: 'https://shopping-phinf.pstatic.net/main_8051001/80510014062.jpg',
    mallLink: 'https://www.11st.co.kr/products/4567890',
    rating: 4.7,
    reviews: 1832
  },
  {
    id: 'db-acc-02',
    name: '방수 스포츠 더플백 (댄스 신발 포켓 포함)',
    price: 21000,
    category: '가방/소품',
    subCategory: '가방',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20240707_777%2F1721000000000_12345%2Fimage.jpg&type=f320_320',
    mallLink: 'https://search.shopping.naver.com/search/all?query=방수+스포츠+더플백',
    rating: 4.79,
    reviews: 312
  },
  {
    id: 'ts-acc-02',
    name: 'TS 스포츠 극세사 타월 3장 세트',
    price: 8500,
    category: '가방/소품',
    subCategory: '소품',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20240808_888%2F1723700000000_12345%2Fimage.jpg&type=f320_320',
    mallLink: 'https://www.11st.co.kr/products/8901234',
    rating: 4.72,
    reviews: 945
  },

  // --- 보호대/기능성 (Protectors) ---
  {
    id: 'ts-pro-01',
    name: '[TS스포츠] 쿠션 스포츠 무릎보호대 (댄서용)',
    price: 15000,
    category: '보호대/기능성',
    subCategory: '관절보호대',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20231212_121%2F1702100000000_12345%2Fimage.jpg&type=f320_320',
    mallLink: 'https://www.11st.co.kr/products/5678901',
    rating: 4.7,
    reviews: 1291
  },
  {
    id: 'ts-pro-02',
    name: 'TS 3NS 근육테테이프 키네시올로지 (5m)',
    price: 7900,
    category: '보호대/기능성',
    subCategory: '기능성',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20240101_111%2F1704800000000_12345%2Fimage.jpg&type=f320_320',
    mallLink: 'https://www.11st.co.kr/products/6789012',
    rating: 4.8,
    reviews: 1355
  },
  {
    id: 'lp-pro-01',
    name: 'LP 발바닥 통증 완화 아치 실리콘 보호대',
    price: 12500,
    category: '보호대/기능성',
    subCategory: '발보호',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20240909_999%2F1726400000000_12345%2Fimage.jpg&type=f320_320',
    mallLink: 'https://search.shopping.naver.com/search/all?query=LP+발바닥+보호대',
    rating: 4.74,
    reviews: 88
  },
  {
    id: 'ts-pro-03',
    name: 'TS 발목 보호대 엘라스틱 랩',
    price: 11000,
    category: '보호대/기능성',
    subCategory: '관절보호대',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20241010_101%2F1729100000000_12345%2Fimage.jpg&type=f320_320',
    mallLink: 'https://www.11st.co.kr/products/9012345',
    rating: 4.69,
    reviews: 456
  },
  {
    id: 'sm-pro-01',
    name: '발가락 교정기 실리콘 세파레이터',
    price: 5900,
    category: '보호대/기능성',
    subCategory: '발보호',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20241111_111%2F1731800000000_12345%2Fimage.jpg&type=f320_320',
    mallLink: 'https://search.shopping.naver.com/search/all?query=실리콘+발가락+교정기',
    rating: 4.61,
    reviews: 1120
  }
];
