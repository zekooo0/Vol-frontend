import React from 'react';
import Image from '../assets/about-img.jpg';
const About = () => {
  return (
    <div id="about" className="container flex flex-col gap-4">
      <h1 className="mx-auto my-20 text-[#00c2cd] text-7xl font-bold ">من نحن</h1>
      <div className=" flex items-center gap-4">
        <div className="flex-1">
          <h3 className="py-3 text-xl font-bold">
            من نحن: نسد الفجوة في العالم العربي من خلال التطوع
          </h3>
          <p className="pr-5 text-lg">
            نؤمن بقوة المجتمع. في <span className="text-[#00c2cd] font-semibold">عضد</span> نبني
            جسراً بين الأفراد المتحمسين والمؤسسات المؤثرة في العالم العربي. مهمتنا هي تعزيز ثقافة
            التطوع من خلال إنشاء منصة سلسة تربط بين الراغبين في العطاء والقضايا التي يهتمون بها.
          </p>
          <h3 className="py-3 text-xl font-bold">تمكين صانعي التغيير:</h3>
          <p className="pr-5 text-lg">
            نحن نتفهم الرغبة في إحداث فرق إيجابي. تمكن منصتنا أي شخص في المجتمع العربي من اكتشاف
            والترشح بسهولة لفرص التطوع التي تتناسب مع اهتماماته ومهاراته. سواء كنت محترفًا متمرسًا
            أو بدأت رحلتك للتو ، فإننا نقدم مجموعة متنوعة من الفرص عبر قضايا مختلفة.
          </p>
          <h3 className="py-3 text-xl font-bold">دعم المنظمات العربية:</h3>
          <p className="pr-5 text-lg">
            نحن ندرك العمل الرائع الذي تقوم به المنظمات العربية التي تتناول القضايا الاجتماعية
            الحرجة. توفر منصتنا لهم أداة قوية للوصول إلى مجموعة أكبر من المتطوعين المتفانين. من خلال
            تبسيط عملية توظيف المتطوعين ، نهدف إلى مساعدة المنظمات على تحقيق أهدافها وتعظيم تأثيرها
            داخل المجتمع.
          </p>
          <h3 className="py-3 text-xl font-bold">معا، يمكننا أن نصنع فرقا:</h3>
          <p className="pr-5 text-lg">
            <span className="text-[#00c2cd] font-semibold">عضد</span> أكثر من مجرد منصة ؛ إنه مجتمع
            من الأفراد متحدون برغبة مشتركة في الخدمة. انضم إلينا وكن جزءًا من حركة تقوي العالم
            العربي ، فرصة تطوع واحدة في كل مرة.
          </p>
        </div>
        <div className="lg:block h-[700px] flex-1 hidden overflow-hidden rounded-lg">
          <img src={Image} className=" w-full aspect-[9/16] bg-bottom" />
        </div>
      </div>
    </div>
  );
};

export default About;
