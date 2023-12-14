import style from '@/styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <div className={style.wrap}>
        <figure>
          <img src="/img/github.jpg" alt="QR" />
        </figure>
        <div className={style.textWrap}>
          <p className={style.text}>ECCコンピューター専門学校 WD2A</p>
          <span className={style.subName}>おおがき りくと</span>
          <h2 className={style.name}>大垣 陸斗</h2>
          <p className={style.text}>デザインエンジニア 志望</p>
          <p>
            フロントエンドのことについての勉強をメインで今までやってきました。
            現在では、デザインの勉強も頑張っており、エンジニアとしてバックエンドの方も勉強しています。
          </p>
        </div>
      </div>
    </>
  )
}
