<template>
  <div class="content">
    <app-bar :title="title" :mode="doc"></app-bar>
    <mu-list class="text-content">
        <div class="yonghuxieyi" v-if="view ==1">
          <h4>功能介绍</h4>
          <p> 1、提问：用户可通过“诸葛装修”APP或M站进行提问。问题类型为免费提问、悬赏提问。</p>
          (1)免费提问：用户将获得优秀的专业管家团队48小时内回答，并可进行追答，同时可能会收到其他用户的主观回答（诸葛装修对普通用户的答案内容不负责）;<br>
          (2)悬赏提问：用户将获得至少一个金牌管家回答，提问后2小时之内必答,优秀的管家团队参与回答。同时可能会收到其他用户的主观回答（诸葛装修对普通用户的答案内容不负责），悬赏提问会扣除相应的赏金（金额由用户自行选择，区间为1-10元钱）。<br>
          <p>2、回答赏金问题：用户的回答被提问者采纳后，将会获得全额的悬赏金额，若提问者5天（120小时）内没有采纳任何回答，则赏金全额分配给点赞数最多的回答，若所有回答点赞数一样，则分配给第一个回答。</p>
          <p>3、提现须知：需绑定微信账号才可体现，仅支持提现至微信钱包。</p>
          <h4>免责条款</h4>
          <p>欢迎使用诸葛装修！任何使用诸葛装修的用户均应仔细阅读本声明，用户可选择不使用诸葛装修，用户使用诸葛装修的行为，包括进入诸葛装修主页及各层页面将被视为对本声明全部内容的认可。诸葛装修所有刊登内容，以及所提供的信息资料，目的是为了更好地服务我们的访问者，本应用程序不保证所有信息、文本、图形、链接及其它项目的绝对准确性和完整性，故仅供访问者参照使用。
            诸葛装修不担保网络服务一定能满足用户的要求，也不担保网络服务不会中断，对网络服务的及时性、安全性、准确性也都不做担保。对于因不可抗力或诸葛装修不能控制的原因造成的网络服务中断或其他缺陷，诸葛装修不承担任何责任，但将尽力减少因此而给用户造成的损失和影响。诸葛装修严格保障用户隐私权，对上网用户的个人信息保密，未经上网用户同意不得向他人泄露，但法律另有规定的除外。用户自愿注册个人信息，用户在注册时提供的所有信息，都是基于自愿。用户注册个人信息视为同意诸葛装修对这些信息进行善意利用。用户明确同意其使用诸葛装修网络服务所存在的风险将完全由其自己承担。
            任何单位或个人认为诸葛装修的内容（或诸葛装修的第三方内容：例如，效果图分享）可能涉嫌侵犯其合法权益，应该及时向诸葛装修书面反馈，并提供身份证明、权属证明及详细侵权情况证明，诸葛装修在收到上述法律文件后，经审核确认反馈内容确属侵权的，将会尽快删除被控侵权内容。除诸葛装修注明之服务条款外，其它因使用诸葛装修而导致其任何意外、疏忽、合约、毁坏、诽谤、版权或知识产权侵犯及其所造成的各种损失 （包括因下载而感染电脑或手机病毒），诸葛装修概不负责，亦不承担任何法律责任。任何透过诸葛装修网页而链接及得到之资讯、产品及服务，诸葛装修概不负责，亦不负任何法律责任。</p>
          <h4>用户协议</h4>
          <p>1、协议生效条件</p>
          诸葛装修的各项服务的所有权和运作权归诸葛装修运营主体所有。诸葛装修提供的服务将完全按照其发布的章程、服务条款和操作规则严格执行。用户完全完成注册程序，此协议即时生效，您随之成为诸葛装修的注册用户。
          <p>2、注册义务</p>
          诸葛装修通过国际互联网为用户提供网络服务。同时，用户必须：<br>
          (1)自行配备上网的所需设备，包括个人电脑、调制解调器或其他必备上网装置；<br>
          (2)自行负担个人上网所支付的与此服务有关的电话费用、网络费用。<br>
          为了能使用本服务，您同意以下事项∶<br>
          (a)依本服务注册表的提示提供您本人真实、正确、最新及完整的资料；<br>
          (b)维持更新您个人用户信息，确保其真实、正确、最新及完整。若您提供任何错误、不实、过时或不完整的资料，并为诸葛装修所确知，或者诸葛装修有合理的理由怀疑 前述资料为错误、不实、过时或不完整，诸葛装修有权暂停或终止您的帐号，并拒绝您于现在和未来使用诸葛装修全部或部分的服务；<br>
          (c)用户同意接受诸葛装修通过电子邮件或其他方式向用户发送广告或其他相关商业信息。<br>
          <p>3、用户信息的存储与限制</p>
          诸葛装修不对用户所发布信息的删除或储存失败负责。诸葛装修有判定用户的行为是否符合诸葛装修服务条款的要求和精神的权利，如果用户违背了服务条款的规定，诸葛装修有中断对其提供网络服务的权利。
          <p>4、服务条款的修改</p>
          诸葛装修有权在必要时修改服务条款。诸葛装修服务条款一旦发生变动，将会在重要页面上提示所修改的内容。如果不同意所改动的内容，用户可以主动取消获得的网络服务。如果用户继续享用网络服务，则视为接受服务条款的变动。诸葛装修保留随时修改或中断服务而不需告知用户的权利。诸葛装修行使修改或中断服务的权利，不需对用户或第三方负责。
          <p>5、拒绝提供担保</p>
          用户对网络服务的使用承担风险。诸葛装修对此不作任何类型的担保，不论是明确的或隐含的，但是不对商业性的隐含担保、特定目的和不违反规定的适当担保作限制。
          <p>6、有限责任</p>
          诸葛装修对任何直接、间接、偶然、特殊及继起的损害不负责任，这些损害可能来自：不正当使用网络服务，在网上购买商品或进行同类型服务，在网上进行交易，非法使用网络服务或用户传送的信息有所变动。
          <p>7、服务的结束</p>
          用户或诸葛装修可随时根据实际情况中断一项或多项网络服务。诸葛装修不需对任何个人或第三方负责而随时中断服务。用户对后来的条款修改有异议，或对诸葛装修的服务不满，可以行使如下权利：(a)停止使用诸葛装修的网络服务；(b) 通告诸葛装修停止对该用户的服务。结束用户服务后，用户使用网络服务的权利马上中止。从那时起，用户没有权利，诸葛装修也没有义务传送任何未处理的信息或未完成的服务给用户或第三方。
          <p>8、用户管理</p>
          用户单独承担发布内容的责任。用户对服务的使用是根据所有适用于诸葛装修的国家法律、地方法律和国际法律标准的。<br>
          用户必须遵循：<br>
          (1)从中国境内向外传输技术性资料时必须符合中国有关法规；<br>
          (2)使用网络服务不作非法用途；<br>
          (3)不干扰或混乱网络服务；<br>
          (4)遵守所有使用网络服务的网络协议、规定、程序和惯例；<br>
          (5)转贴文章或者上传他人设计作品时事先征得原作者同意，并注明"原作者姓名及出处，版权仅归原作者所有"，诸葛装修对可能由此产生侵权的直接或间接结果不必承担任何责任；<br>
          (6)用户承诺不传输任何非法的、骚扰性的、中伤他人的、辱骂性的、恐吓性的、伤害性的、庸俗的，淫秽等信息资料。另外，用户也不能传输任何教唆他人构成犯罪行为的资料；不能传输助长国内不利条件和涉及国家安全的资料；不能传输任何不符合当地法规、国家法律和国际法律的资料；<br>
          (7)黑名单制度是平台信用体系的一部分，如发现企业或个人用户发生违背市场竞争规则和侵害消费者权益包括但不限以下的行为的：<br>
          （a）未履行法定或者约定义务；<br>
          （b）违反国家法律法；<br>
          （c）严重违反平台用户行为准则；<br>
          （d）直接或间接破坏平台公平交易。<br>
          诸葛装修可以行使但不仅限于以下权利：（a）对该账户进行拉黑，停止服务网络服务3-12个月；(b)永久停止使用诸葛装修的网络服务；(c) 通告诸葛装修停止对该用户的服务，结束用户服务后，用户使用网络服务的权利马上中止；（d）企业用户按照平台规则进行相应处罚或追究其法律责任。<br>
          <p>9、内容的权利</p>
          (1)用户对于其创作并在诸葛装修上发布的合法信息依法享有著作权及其相关权利。<br>
          (2)对于用户通过诸葛装修网络服务上传到诸葛装修应用程序上可公开获取区域的任何信息，用户同意诸葛装修在全世界范围内具有永久性的、不可撤销的权利和免许可费、可完全转授的权利。诸葛装修可将用户通过诸葛装修网络服务上传到诸葛装修应用程序上可公开获取区域的任何信息免费进行复制、修改、改编、信息网络传播等以用于诸葛装修业务，并可通过各种形式免费使用上述信息。<br>
          <p>10、用户的广告宣传</p>
          用户在自己发表的信息中加入宣传资料或参与广告策划，在诸葛装修的免费服务上展示他们的产品，任何这类促销方法，包括运输货物、付款、服务、商业条件、担保及与广告有关的描述都只是在相应的用户和广告销售商之间发生。诸葛装修不承担任何责任，诸葛装修没有义务为这类广告销售负任何的责任。<br>
          <p>11、法律</p>
          网络服务条款要与中华人民共和国的法律解释相一致，用户和诸葛装修一致同意服从中国境内法院管辖。如发生诸葛装修服务条款与中华人民共和国法律相抵触时，则这些条款将完全按法律规定重新解释，而其它条款则依旧保持对用户产生法律效力和影响。<br>
          在任何情况下，诸葛装修用户不得利用诸葛装修进行违反或可能违反国家法律和法规的言论或行为，否则，诸葛装修可在任何时候不经任何事先通知终止向用户提供服务。并且用户对自己的言论或行为负责。<br>
          隐私政策 <br>
          诸葛装修本应用程序由北京优装网信息科技有限公司（以下简称“我们”）运营并由其关联公司提供各种支持。 <br>
          我们注重对您个人隐私的保护。有时候我们需要某些信息才能为您提供您请求的服务，本隐私声明解释了这些情况下的数据收集和使用情况。本隐私声明适用于本应用程序的所有相关服务。如果您访问本应用程序、使用本应用程序的任何服务，那么您便接受了本隐私声明。
          <br>
          <p>用户信息的获取</p>
          我们获取用户信息的主要目的在于向您提供一个顺畅、高效的访问流程，并致力于不断完善和提升您的体验。 <br>
          我们可能获取的用户信息类型包括： <br>
          1、注册信息（如，用户名、及在注册过程中提供的其他信息）； <br>
          2、个人或公司联系方式（如，姓名、公司名称、通讯地址、电邮地址、电话、手机号码、传真号码）； <br>
          4、用于您身份识别的信息（如，身份证号码、护照号码、驾驶证号码）； <br>
          5、财务信息（如，银行账号）； <br>
          我们可能会就下列各种情况，获得您的用户信息： <br>
          1、您在访问或使用本应用程序服务时提供的信息； <br>
          2、您在与我们的沟通中自动获取的信息：无论您何时与我们沟通，我们接收并储存的信息； <br>
          3、从其他来源获取的信息：如您参加我们或我们与合作伙伴组织的任何活动。 <br>
          <p>顾客信息的使用</p>
          我们可能会利用所获取的用户信息： <br>
          1、向您提供所需要的产品或服务（如装修需求）； <br>
          2、负责处理和发放款项； <br>
          3、就您的要求向您提供咨询服务，或向您做出回应或与您沟通； <br>
          4、向您提供我们认为您可能会感兴趣的产品或服务； <br>
          5、为提升我们的服务，联系您进行调研； <br>
          6、进行数据分析（如，装修需求或趋势分析、市场或顾客调查、财务分析）； <br>
          7、管理或认可您参加各种活动的资格，如线上或线下活动、优惠或促销活动； <br>
          8、经营、评估和完善我们的业务（包括开发新产品和服务；管理我们的通信；判断我们的销售、营销和广告效果；分析和强化我们的产品、服务和网站；和开展会计、审计、记账、对账和收集活动）； <br>
          9、在事先获得您同意的情况下，联系您指定的联系人并发送信息； <br>
          10、防止各种违法或犯罪活动和其他法律责任； <br>
          11、遵守法律规定和我们的政策规则。 <br>
          <p>用户信息的共享、披露与转让</p>
          用户的信息是我们业务的重要组成部分，我们不会出售或以其他方式共享您的个人信息，但本《隐私声明》中已列明的如下情况除外。 <br>
          1、合作伙伴： <br>
          我们可能会与我们的关联公司或合作伙伴（包括但不限于，您通过我们提供的联合登陆方式登陆的其它网站，以下统称“合作伙伴”）共享用户信息。您可以辨别您的使用或交易行为何时会涉及我们的合作伙伴，我们会与该合作伙伴分享与这些使用或交易行为有关的用户信息。
          <br>
          2、第三方服务提供者： <br>
          我们有可能聘请外部公司或个人代表我们提供某些产品或服务，包括但不限于，提供运营、维护、IT平台和/或技术服务、数据安全或备份服务、处理订单、递送货物、发送信函或电子邮件、清除用户名单中的重复信息、分析数据、提供市场营销帮助、提供搜索结果和链接（包括付费搜索名单和链接）、处理收/付款事项以及提供用户服务。在该等情况下，我们可能会共享用户信息。
          <br>
          3、征得您的同意： <br>
          除以上规定及本《隐私声明》已列明的情况外，当您的信息有可能披露给第三方时，您将会得到通知，并且您将有机会选择不与第三方共享此信息。 <br>
          在下列情况下，我们可能还会披露您的相关信息： <br>
          4、根据法律、法规或法律程序（如，法院法令或传召出庭令）的规定； <br>
          5、根据政府部门（如，行政机构、执法机构）的要求； <br>
          6、为了保护本应用程序、我们的用户或其他人的权利及其财产或安全，或当我们认为对防止实际损害或财务损失，或调查可疑或实际非法活动来说，披露乃属必要或适当时。这也包括为防止欺诈等违法活动和减少信用风险而与其他公司和组织交换信息。
          <br>
          我们希望您能够理解，我们可能会向第三方出售或转让本应用程序，和/或允许承继方承继本应用程序的服务。在该等情况中，作为本应用程序不可分割一部分，您的个人信息也将被提供给该等第三方和/或承继方，以使其可以继续为您提供本应用程序服务。接受本隐私声明意味着您已同意该等信息提供。
          <br>
          <p>未成年人信息的保护</p>
          我们非常重视对未成年人（依照现行法律的定义）个人信息的保护。我们不希望未成年人直接使用本应用程序提供的产品或服务，我们希望未成年人与其监护人一起，或在监护人的监督下使用本应用程序的产品或服务。 <br>
          我们既不主动寻求、也不希望收到直接来自未成年人的个人信息；但我们无法保证时刻都能准确地了解到访问或使用本应用程序的访问者年龄。如果未成年人在无监护人同意的情况下向我们提供了他/她的个人信息，我们建议他/她的监护人与我们联系以删除该信息，并且通知我们以后不再向该未成年人发送任何信息。
          <br>
          <p>其他网站链接</p>
          为给您提供更多便利和商业信息，本应用程序可能会包含至其他网站的链接。该等网站的运营商有可能不是我们的关联公司。所链接的网站也可能拥有其自身的隐私政策或声明，所以，我们强烈建议您，在访问任何所链接的网站时查看该等隐私政策或声明。对于非由我们运营之任何网站的内容、对该等网站的任何使用或该等网站的隐私政策，我们概不负责。
          <br>
        </div>
        <div class="zhuanshuquanli" v-if="view==2" style="">
          <p>1) 至少一个金牌管家回答；</p>

          <p>2) 提问后2小时之内必答；</p>

          <p>3) 优秀的管家团队参与回答。</p>
        </div>
        <div class="tiwenxuzhi" v-if="view==3">
          <p>1、你的问题将至少获得一位金牌装修管家回答</p>
          <img src="../assets/img/qk(1).png" alt="" class="xuzhi_img_1">
          <div class="info">当天20点后提问的问题将最晚再第二天10点前获得回答</div>
          <p>2、你的问题在2小时内必会获得回答</p>
          <img src="../assets/img/qk(2).png" alt="" class="xuzhi_img_2">
          <p>3、你的问题同时会推送到更多优秀的管家团队,获得
            更多专业解答</p>
          <img src="../assets/img/qk(3).png" alt="" class="xuzhi_img_3">
          <p>4、同时，你的问题也有可能获得其他装修达人的解答</p>
          <img src="../assets/img/qk(4).png" alt="" class="xuzhi_img_4">
          <p>5、悬赏提问请根据你的自由意愿选择赏金金额（1-10元）
            赏金最终会奖励给你采纳的回答者，如你未选择采纳，
            赏金将悬赏给被点赞数最高或最“早”回答的回答者</p>
          <img src="../assets/img/qk(5).png" alt="" class="xuzhi_img_5">

        </div>
    </mu-list>
  </div>
</template>

<script>
  import AppBar from '../components/commons/AppBar.vue'
  export default {
    name: "qa-user-agreement",
    components:{
      AppBar,
    },
    data(){
      return {
        title:'诸葛装修用户协议',
        view:1,
        doc:'page'
      }
    },
    created(){

      let type = this.$route.params.type
      this.view = type
      switch (this.view){
        case 1:
          this.title = '诸葛装修用户协议';
          window.document.title = '诸葛装修用户协议'
          break;
        case  2:
          this.title = '专属权利';
          window.document.title = '专属权利'
          break;
        case 3:
          this.title = '提问须知';
          window.document.title = '提问须知'
          this.doc = 'zsql'
          break;
        default:
          this.title = ''
      }

    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/px2rem";
  .content{
    height: 100%;
    overflow:auto;   /* 用于 android4+，或其他设备 */
    -webkit-overflow-scrolling:touch;    /* 用于 ios5+ */
  }
  .text-content{
    padding: px2rem(10) px2rem(20) px2rem(80);
    height: 100%;
    width: 100%;
    overflow: scroll;
  }
  .tiwenxuzhi{
    text-align: center;
    p{
      text-align: left;
    }
    .info{
      font-size: px2rem(12);
      color:#999
    }
    img{
      width: px2rem(250);
    }
    .xuzhi_img_5{
      width: px2rem(150);
    }
    .xuzhi_img_2{
      width: px2rem(150);
    }
  }


</style>
