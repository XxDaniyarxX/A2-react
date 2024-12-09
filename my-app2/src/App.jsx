import './App.css'
import Products1 from './сomponents/Products1.jsx'
import Service from './сomponents/Service.jsx'

export default function App() {


  return (
    <>
     <div style={{marginBottom: '50px'}}>
       <Service name="Daniyar" age={16} img1={'https://th.bing.com/th/id/OIP.zlRulyIYEfLPsw0mYVpM3AHaDt?rs=1&pid=ImgDetMain'} />
       <Service name='Genius' age={10}  img1={'https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75'} />

     </div>
      <div className='Product'>
       <Products1 title='Iphone 20 ultra pro max' discount={true} price={190900} present={5} image='https://www.iphonetricks.org/wp-content/uploads/2019/09/upcoming-iphone-20-pro.jpg'/>
       <Products1 title='Цитата №1' discount={false} price={999999} image='https://i.pinimg.com/originals/ad/82/7e/ad827eec0b1e75e7a20fd0c568ab6027.jpg'/>
       <Products1 title='Samusng Galaxy S24 Ultra' discount={true} price={89000} present={13} image='https://login.kg/image/catalog/new/Phones/Samsung/S24%20Ultra/5.jpg'/>
       <Products1 title='Xiaomi 13 Ultra' discount={false} price={59700} present={7} image='https://www.ixbt.com/img/n1/news/2023/3/1/70cf98bcly1hd2jim3bxpj21400u00wh_large.jpg'/>
       <Products1 title='MacBook Air M3' discount={false} price={117500} image='https://maxmobiles.ru/images/cp_blog_post/95/635411.jpg'/>
       <Products1 title='MSI CYBORG 15' discount={true} price={106000} present={2} image='https://www.ultra.kg/upload/resize_cache/iblock/151/884_591_1d0e97ea46f4438969ab06dd5b311ca67/151f0a913e22bedccef13c94fd8a949c.jpg'/>
       <Products1 title='Lamborgini Aventador' discount={false} price={2000000} image='https://upload.wikimedia.org/wikipedia/commons/b/bb/2023_Lamborghini_Aventador_Ultimae.jpg'/>
       <Products1 title='Apple Watch SE' discount={false} price={396000} present={11} image='https://object.pscloud.io/cms/cms/Photo/img_0_911_720_1_1.jpg'/>
     </div>
    </>
  )
}

