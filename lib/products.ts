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
  // --- 라인댄스화 (Shoes: 10 items) ---
  { id: 'ts-shoe-01', name: '[TS스포츠] 스포츠 댄스화 세트', price: 22900, category: '라인댄스화', subCategory: '스니커즈', img: 'https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/9224059060/B.webp', mallLink: 'https://www.11st.co.kr/products/9224059060', rating: 4.8, reviews: 3208 },
  { id: 'al-shoe-01', name: '알롱제 라인댄스화 메쉬분리창', price: 26900, category: '라인댄스화', subCategory: '재즈화', img: 'https://shopping-phinf.pstatic.net/main_3360734/33607349956.20220721045354.jpg?type=f640', mallLink: 'https://search.shopping.naver.com/catalog/33607349956', rating: 4.82, reviews: 4366 },
  { id: 'as-shoe-01', name: '에어솔 Haru 부츠댄스화 블랙', price: 42000, category: '라인댄스화', subCategory: '부츠', img: 'https://shopping-phinf.pstatic.net/main_8824974/88249744391.jpg?type=f300', mallLink: 'https://search.shopping.naver.com/search/all?query=에어솔+라인댄스화', rating: 4.85, reviews: 520 },
  { id: 'as-shoe-02', name: '에어솔 소프트 댄스 스니커즈', price: 38000, category: '라인댄스화', subCategory: '스니커즈', img: 'https://shopping-phinf.pstatic.net/main_5885520/58855204963.20260208233816.jpg?type=f300', mallLink: 'https://search.shopping.naver.com/search/all?query=에어솔+댄스화', rating: 4.7, reviews: 310 },
  { id: 'mt-shoe-01', name: '메트로 프리미엄 재즈 댄스화', price: 53000, category: '라인댄스화', subCategory: '재즈화', img: 'https://shopping-phinf.pstatic.net/main_8314125/83141254062.jpg', mallLink: 'https://search.shopping.naver.com/catalog/31412540623', rating: 4.81, reviews: 1328 },
  { id: 'ts-shoe-02', name: '[TS스포츠] 전문가용 가죽 댄스화', price: 45000, category: '라인댄스화', subCategory: '전문가용', img: 'https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/9224059060/B.webp', mallLink: 'https://www.11st.co.kr/products/9224059060', rating: 4.7, reviews: 840 },
  { id: 'as-shoe-03', name: '여성 모던 중굽 재즈댄스화', price: 35000, category: '라인댄스화', subCategory: '재즈화', img: 'https://shopping-phinf.pstatic.net/main_5919585/59195858239.20260309225833.jpg?type=f300', mallLink: 'https://search.shopping.naver.com/search/all?query=모던+재즈댄스화', rating: 4.65, reviews: 142 },
  { id: 'as-shoe-04', name: '여성용 소프트솔 통기성 댄스화', price: 29800, category: '라인댄스화', subCategory: '스니커즈', img: 'https://shopping-phinf.pstatic.net/main_5326978/53269786508.20260404053319.jpg?type=f300', mallLink: 'https://search.shopping.naver.com/search/all?query=통기성+댄스화', rating: 4.81, reviews: 256 },
  { id: 'sk-shoe-01', name: '스킬라 에어로빅화 방송댄스화', price: 25900, category: '라인댄스화', subCategory: '스니커즈', img: 'https://shopping-phinf.pstatic.net/main_8612596/86125960694.jpg?type=f300', mallLink: 'https://search.shopping.naver.com/search/all?query=스킬라+에어로빅화', rating: 4.77, reviews: 145 },
  { id: 'mt-shoe-02', name: '메트로 가죽 재즈화 프로', price: 58000, category: '라인댄스화', subCategory: '재즈화', img: 'https://shopping-phinf.pstatic.net/main_8600000/86000001234.jpg', mallLink: 'https://search.shopping.naver.com/search/all?query=메트로+재즈화', rating: 4.9, reviews: 25 },

  // --- 의류 (Apparel: 20 items) ---
  { id: 'dm-top-01', name: '[드레스몰] 퀘스트 댄스 탑', price: 24500, category: '의류', subCategory: '상의', img: 'https://shopping-phinf.pstatic.net/main_8347632/83476325082.1.jpg?type=f300', mallLink: 'https://search.shopping.naver.com/search/all?query=드레스몰+댄스탑', rating: 4.9, reviews: 185 },
  { id: 'dm-top-02', name: '너플러 연습용 반팔 댄스탑', price: 18000, category: '의류', subCategory: '상의', img: 'https://shopping-phinf.pstatic.net/main_8438987/84389870457.jpg?type=f300', mallLink: 'https://search.shopping.naver.com/search/all?query=드레스몰+반팔탑', rating: 4.8, reviews: 210 },
  { id: 'dm-top-03', name: '드레스몰 테르 댄스 연습상의', price: 21000, category: '의류', subCategory: '상의', img: 'https://shopping-phinf.pstatic.net/main_8271691/82716916165.jpg?type=f300', mallLink: 'https://search.shopping.naver.com/search/all?query=드레스몰+상의', rating: 4.75, reviews: 92 },
  { id: 'dm-bottom-01', name: '프리미엄 찰랑 와이드 팬츠', price: 19800, category: '의류', subCategory: '하의', img: 'https://shopping-phinf.pstatic.net/main_8437927/84379272328.jpg?type=f300', mallLink: 'https://search.shopping.naver.com/search/all?query=라인댄스+찰랑바지', rating: 4.8, reviews: 512 },
  { id: 'dm-bottom-02', name: '고탄력 라인댄스 찰랑바지 (A라인)', price: 18500, category: '의류', subCategory: '하의', img: 'https://shopping-phinf.pstatic.net/main_8904895/89048951161.6.jpg?type=f300', mallLink: 'https://search.shopping.naver.com/search/all?query=찰랑바지', rating: 4.78, reviews: 310 },
  { id: 'dm-skirt-01', name: '스티치 절개 라인댄스 치마바지', price: 26500, category: '의류', subCategory: '하의', img: 'https://shopping-phinf.pstatic.net/main_5661116/56611165889.jpg?type=f300', mallLink: 'https://search.shopping.naver.com/search/all?query=치마바지', rating: 4.81, reviews: 215 },
  { id: 'dm-skirt-02', name: '코듀로이 A라인 댄스 치마바지', price: 29000, category: '의류', subCategory: '하의', img: 'https://shopping-phinf.pstatic.net/main_3796096/37960962959.jpg?type=f300', mallLink: 'https://search.shopping.naver.com/search/all?query=치마바지', rating: 4.7, reviews: 86 },
  { id: 'dress-01', name: '[드레스몰] 디바 라틴 원피스', price: 58000, category: '의류', subCategory: '원피스', img: 'https://shopping-phinf.pstatic.net/main_1139502/11395020766.2.jpg?type=f300', mallLink: 'https://search.shopping.naver.com/search/all?query=라틴원피스', rating: 4.88, reviews: 342 },
  { id: 'dm-dress-02', name: '반짝이 찰랑 라인댄스 원피스', price: 48000, category: '의류', subCategory: '원피스', img: 'https://shopping-phinf.pstatic.net/main_8868019/88680197653.jpg?type=f300', mallLink: 'https://search.shopping.naver.com/search/all?query=댄스원피스', rating: 4.91, reviews: 120 },
  { id: 'el-bottom-01', name: '엘레바 셔링 보정 레깅스', price: 14900, category: '의류', subCategory: '하의', img: 'https://shopping-phinf.pstatic.net/main_8184803/81848032054.jpg', mallLink: 'https://search.shopping.naver.com/search/all?query=엘레바+레깅스', rating: 4.79, reviews: 828 },
  { id: 'dm-top-04', name: '망사 시스루 댄스 연습 탑', price: 21000, category: '의류', subCategory: '상의', img: 'https://shopping-phinf.pstatic.net/main_8495267/84952673923.jpg?type=f300', mallLink: 'https://search.shopping.naver.com/search/all?query=망사댄스탑', rating: 4.65, reviews: 45 },
  { id: 'sk-skirt-01', name: '데닉 핑크 미니 스커트 팬츠', price: 32000, category: '의류', subCategory: '하의', img: 'https://shopping-phinf.pstatic.net/main_8671828/86718289374.jpg?type=f300', mallLink: 'https://search.shopping.naver.com/search/all?query=스커트팬츠', rating: 4.85, reviews: 62 },
  { id: 'dm-dress-03', name: '이오스 라인댄스 원피스', price: 52000, category: '의류', subCategory: '원피스', img: 'https://shopping-phinf.pstatic.net/main_9054032/90540326760.jpg?type=f300', mallLink: 'https://search.shopping.naver.com/search/all?query=댄스원피스', rating: 4.77, reviews: 38 },
  { id: 'el-top-01', name: '엘레바 슬림핏 댄스 가디건', price: 18900, category: '의류', subCategory: '상의', img: 'https://shopping-phinf.pstatic.net/main_8318831/83188317834.jpg?type=f640', mallLink: 'https://search.shopping.naver.com/search/all?query=엘레바+가디건', rating: 4.82, reviews: 156 },

  // --- 가방/소품 (Accessories: 10 items) ---
  { id: 'acc-bag-01', name: '[리나리노] 슈즈 메쉬 전용 주머니', price: 5500, category: '가방/소품', subCategory: '가방', img: 'https://shopping-phinf.pstatic.net/main_8613083/86130830608.jpg?type=f300', mallLink: 'https://search.shopping.naver.com/search/all?query=슈즈주머니', rating: 4.95, reviews: 1205 },
  { id: 'acc-bag-02', name: '토슈즈 파우치 슈즈 케이스', price: 8500, category: '가방/소품', subCategory: '가방', img: 'https://shopping-phinf.pstatic.net/main_5917424/59174240651.jpg?type=f300', mallLink: 'https://search.shopping.naver.com/search/all?query=슈즈파우치', rating: 4.8, reviews: 342 },
  { id: 'acc-socks-01', name: '댄스 전용 논슬립 삭스 (발목)', price: 4500, category: '가방/소품', subCategory: '양말', img: 'https://shopping-phinf.pstatic.net/main_8628016/86280163407.1.jpg?type=f300', mallLink: 'https://search.shopping.naver.com/search/all?query=댄스양말', rating: 4.92, reviews: 428 },
  { id: 'acc-socks-02', name: '필라테스/댄스 엑스밴드 토삭스', price: 7900, category: '가방/소품', subCategory: '양말', img: 'https://shopping-phinf.pstatic.net/main_3928957/39289570931.jpg?type=f300', mallLink: 'https://search.shopping.naver.com/search/all?query=토삭스', rating: 4.85, reviews: 96 },
  { id: 'acc-bag-03', name: '전문가용 하드 타입 슈즈 박스', price: 15000, category: '가방/소품', subCategory: '가방', img: 'https://shopping-phinf.pstatic.net/main_5891870/58918708997.20260214004556.jpg?type=f300', mallLink: 'https://search.shopping.naver.com/search/all?query=슈즈가방', rating: 4.79, reviews: 215 },
  { id: 'acc-socks-03', name: '통기성 메쉬 댄스 전용 양말', price: 3900, category: '가방/소품', subCategory: '양말', img: 'https://shopping-phinf.pstatic.net/main_5486157/54861575674.20250520010621.jpg?type=f300', mallLink: 'https://search.shopping.naver.com/search/all?query=댄스소품', rating: 4.88, reviews: 150 },
  { id: 'acc-towel-01', name: '댄스 전용 급속 흡수 스포츠 타월', price: 6500, category: '가방/소품', subCategory: '소품', img: 'https://shopping-phinf.pstatic.net/main_8429182/84291829012.jpg?type=f300', mallLink: 'https://search.shopping.naver.com/search/all?query=스포츠타월', rating: 4.9, reviews: 820 },
  { id: 'acc-belt-01', name: '허리 라인 보정용 댄스 벨트', price: 12000, category: '가방/소품', subCategory: '소품', img: 'https://shopping-phinf.pstatic.net/main_8341628/83416280456.jpg?type=f300', mallLink: 'https://search.shopping.naver.com/search/all?query=댄스벨트', rating: 4.75, reviews: 45 },

  // --- 보호대/기능성 (Protectors: 5 items) ---
  { id: 'pro-knee-01', name: '[잠스트] 전문 댄서 보호대 JK-1', price: 35000, category: '보호대/기능성', subCategory: '보호대', img: 'https://shopping-phinf.pstatic.net/main_8042123/80421232965.2.jpg?type=f300', mallLink: 'https://search.shopping.naver.com/search/all?query=잠스트보호대', rating: 4.9, reviews: 1520 },
  { id: 'pro-knee-02', name: '아디다스 에센셜 댄서용 패드', price: 28000, category: '보호대/기능성', subCategory: '보호대', img: 'https://shopping-phinf.pstatic.net/main_8592862/85928622055.8.jpg?type=f300', mallLink: 'https://search.shopping.naver.com/search/all?query=아디다스보호대', rating: 4.75, reviews: 320 },
  { id: 'pro-foot-01', name: '실리콘 발가락 교정 세바레이터', price: 5900, category: '보호대/기능성', subCategory: '발보호', img: 'https://shopping-phinf.pstatic.net/main_8490049/84900496543.2.jpg?type=f300', mallLink: 'https://search.shopping.naver.com/search/all?query=발가락교정기', rating: 4.68, reviews: 1120 },
  { id: 'pro-ankle-01', name: '발목 지지 압박 보호대', price: 18000, category: '보호대/기능성', subCategory: '보호대', img: 'https://shopping-phinf.pstatic.net/main_8213456/82134567890.jpg?type=f300', mallLink: 'https://search.shopping.naver.com/search/all?query=발목보호대', rating: 4.82, reviews: 215 },
  { id: 'pro-waist-01', name: '슬림 타입 허리 보호대', price: 25000, category: '보호대/기능성', subCategory: '보호대', img: 'https://shopping-phinf.pstatic.net/main_8314567/83145678901.jpg?type=f300', mallLink: 'https://search.shopping.naver.com/search/all?query=허리보호대', rating: 4.7, reviews: 98 },
  
  // --- 의류 추가 (Apparel Extras) ---
  { id: 'dm-top-05', name: '[드레스몰] 레이스 댄스 연습 탑', price: 23000, category: '의류', subCategory: '상의', img: 'https://shopping-phinf.pstatic.net/main_5678901/56789012345.jpg?type=f300', rating: 4.85, reviews: 67, mallLink: '' },
  { id: 'dm-bottom-03', name: '와이드 나팔 찰랑바지 블랙', price: 19500, category: '의류', subCategory: '하의', img: 'https://shopping-phinf.pstatic.net/main_6789012/67890123456.jpg?type=f300', rating: 4.79, reviews: 112, mallLink: '' },
  { id: 'sk-top-02', name: '스킬라 기모 안감 댄스 상의', price: 28000, category: '의류', subCategory: '상의', img: 'https://shopping-phinf.pstatic.net/main_7890123/78901234567.jpg?type=f300', rating: 4.81, reviews: 45, mallLink: '' },
  { id: 'sk-bottom-03', name: '조거 핏 댄스 연습용 팬츠', price: 25000, category: '의류', subCategory: '하의', img: 'https://shopping-phinf.pstatic.net/main_8901234/89012345678.jpg?type=f300', rating: 4.7, reviews: 89, mallLink: '' }
];
