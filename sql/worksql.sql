/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50719
Source Host           : localhost:3306
Source Database       : worksql

Target Server Type    : MYSQL
Target Server Version : 50719
File Encoding         : 65001

Date: 2018-06-19 15:07:08
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `manager`
-- ----------------------------
DROP TABLE IF EXISTS `manager`;
CREATE TABLE `manager` (
  `id` varchar(48) NOT NULL DEFAULT '',
  `password` varchar(48) DEFAULT NULL,
  `name` varchar(96) DEFAULT NULL,
  `maxNum` int(11) DEFAULT NULL,
  `pic` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of manager
-- ----------------------------
INSERT INTO `manager` VALUES ('123456', '123456', '大鹏', '5', '1528798966admin.jpg');

-- ----------------------------
-- Table structure for `message`
-- ----------------------------
DROP TABLE IF EXISTS `message`;
CREATE TABLE `message` (
  `id` int(10) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `recipient` varchar(10) DEFAULT '',
  `title` varchar(100) DEFAULT NULL,
  `info` varchar(5000) DEFAULT '',
  `time` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of message
-- ----------------------------
INSERT INTO `message` VALUES ('0000000006', 'T', '关于做好试卷命题管理工作的通知', '各学院（部）：\r\n\r\n根据《杭州师范大学教师本科教学工作业绩考核实施办法》（杭师大教〔2014〕7号）文件精神，经研究，决定开展2017-2018学年教师本科教学工作业绩考核工作，具体通知如下：\r\n\r\n一、工作流程\r\n\r\n（一）修订实施细则（6月7日——6月14日）。学院（部）根据学校文件结合学院实际，修订本学院的教师本科教学工作业绩考核实施细则，修订的考核实施细则须经本院（部）教学委员会审议通过，盖章签字后于6月15日前报教师教学发展中心审定。\r\n\r\n（二）组织考核工作（6月19日——6月28日）。学院（部）根据考核实施细则对全院专任教师的本学年的本科教学工作业绩进行考核，学院（部）考核工作小组对教师填报的教学工作量和教学建设研究、奖励及指导学生获奖等情况进行审核折算，结合教师课堂教学质量测评成绩和教师课堂教学实际情况，确定教师本科教学工作业绩考核成绩。\r\n\r\n（三）公示考核结果（6月29日——7月5日）。考核结果须在学院（部）内公示一周。公示期内，教师对考核结果如有异议，由学院（部）考核工作小组复核，并在5日内将结果反馈给教师。如教师对学院（部）反馈的最终结果仍有异议的，可在接到该结果通知后5日内向学校考核领导小组办公室以书面形式提出申诉。\r\n\r\n（四）提交考核材料（7月10日）。学院（部）考核工作小组填写《杭州师范大学教师本科教学工作业绩考核成绩汇总表》（附件），由组长审核终签，学院（部）盖章，7月10日前报教师教学发展中心。', '2018-06-14');
INSERT INTO `message` VALUES ('0000000007', 'T', '关于开展杭州市专业类建设项目结项验收工作的通知', '为了提高广大教师的微课制作能力，教师教学发展中心邀请了教育技术专家茅育青教授作微课专题讲座。', '2018-06-14');
INSERT INTO `message` VALUES ('0000000008', 'T', '茅育青教授作微课专题讲座', '为了提高广大教师的微课制作能力，教师教学发展中心邀请了教育技术专家茅育青教授作微课专题讲座。', '2018-06-14');
INSERT INTO `message` VALUES ('0000000009', 'T', '关于开展校第二批慕课建设项目中期检查工作的通知', '本次中期检查的重点是课程网站建设情况和课程内涵建设情况等。各课程负责人对照申报书，对课程的网络资源建设和应用情况进行自查、梳理，填写《杭州师范大学MOOC/SPOC课程建设项目中期自查报告》（见附件2）。经学院审核后，由教务处组织课程建设专家审阅各立项课程网络资源建设、应用情况和《中期自查报告》，给出意见和建议。', '2018-06-14');
INSERT INTO `message` VALUES ('0000000010', 'T', '关于2018-2019学年第一学期教学工作安排的通知', '1.教学校历第5周，安排布置下学期教学工作任务。各学院教务科务必先在系统中对本学院各专业的培养方案仔细核实，确保教学计划无误，核对重点包括开课课程名称、学期、周学时、学分、考核方式、学时数、模块信息、开课学院、学位课程标识、副修课程标识等，如果有误及时联系教研科进行修正。\r\n\r\n2.第6周至第7周，各学院教务科在教学管理系统中将教学任务和教材安排全部落实到位。\r\n\r\n3.第8周，由教务处审核教学任务和教材落实情况。\r\n\r\n4.第9周至第11周，编排完全校下学期课表。\r\n\r\n5.第12周，完成选课数据的测试和处理。\r\n\r\n6.第13周组织学生，根据推荐课表和《选课指南》，进行第一轮网上选课。\r\n\r\n    7.第15周进行第二轮网上选课。', '2018-06-14');
INSERT INTO `message` VALUES ('0000000011', 'S', '2018年上半年大学英语等级考试考生须知', '题型：考生须依次完成作文、听力、阅读、翻译部分考试内容。作文题目在试题册背面，考生在完成作文题期间即开考半小时内CET4为9:10-9:40（CET6为15:10-15:40）不得翻阅试题册；听力考试开始时间，CET4为9:40（CET6为15：40），听力结束时间，CET4为10：05分（CET6为16：10）。听力结束后，学生马上停止答题摘下耳机，监考老师回收答题卡1；CET4为10：10分（CET6为16：15）考生才能继续答题。具体更详细的流程可参见大学英语四、六级考试网站http://www.cet.edu.cn/。', '2018-06-14');
INSERT INTO `message` VALUES ('0000000012', 'S', '2018—2019学年第一学期选课通知', '选课网址 http://jwgl1.hznu.edu.cn，输用户名和密码（用户名称为学号，初始密码为身份证号）后，点击“登录”按钮后进入选课页面，具体操作流程见《杭州师范大学选课操作指南》附件。副修选课、重修选课、跨专业、年级选课功能在第二轮选课开通。为方便同学们利用手机等移动端进行选课，学校在“移动教务”APP上开通了选课功能, 网页菜单与移动教务菜单对应关系：“选专业（跨专业、年级）课”对应“教学任务选课”，“选体育课”对应“体育选课”，“选通识教育选修课”对应“全校公选课选课”，移动教务APP目前还不支持选重修和副修课，重修和副修选课还需在网页上选。', '2018-06-14');
INSERT INTO `message` VALUES ('0000000013', 'S', '关于2017级本科生副修报名的通知', '1.学生报名时间及方式：5月8日—5月14日，逾期不受理，登录教务管理系统http://jwgl1.hznu.edu.cn/，在【活动报名—副修报名】菜单下，填写相关内容后，点击【报名】按钮后再点击【打印】按钮，将打印后的申请表交学生所在学院教务科盖章后交副修开课学院教务科审核。\r\n\r\n2.学院审核：5月15日—5月18日，副修专业所在学院教务科在5月22日前将报名表按专业分类后交到教务处信息科，教务处汇总并按专业分类，根据报名人数确定是否开办副修专业单独开班（原则上低于30人不单独开班）。\r\n\r\n3.因资源有限，每个学生副修报名只有一次机会，一旦被录取副修专业，原则上不能退报，下一次也不能再报名。每个学生限报一个专业。\r\n\r\n4.学生选课：审核通过的同学可在第二轮在“副修选课”里选副修课程，副修选课从第二轮选课开始。\r\n\r\n5.副修专业计划、课程设置、课程安排等有问题请咨询副修专业开课学院教务科，选课操作问题请咨询教务处叶老师，咨询电话28868202。', '2018-06-14');
INSERT INTO `message` VALUES ('0000000014', 'S', '关于做好2018届毕业生副修资格审核工作的通知', '1．学生根据副修课程修读完成情况，5月10日前填写《杭州师范大学副修专业证书申请表》（附件1）申请副修系列课程或副修专业证书，交所在学院审核是否达到主修专业毕业条件并签署意见。\r\n\r\n2．达到主修专业毕业条件的，5月13日前，由学生将申请表交副修学院，副修学院打印学业成绩单（加盖公章）后进行审核。\r\n\r\n3．副修学院审批后，5月18日前，统一将符合发证条件学生的材料及《杭州师范大学副修证书审核汇总表》（附件3）报送教务处。\r\n\r\n（二）副修学位\r\n\r\n1．学生完成副修学位规定的修读要求，5月10日前填写《杭州师范大学副修学位证书申请表》（附件2）申请副修学位证书，交所在学院审核是否符合主修专业学士学位授予条件并签署意见。\r\n\r\n2．符合主修专业学士学位授予条件的，5月13日前，由学生将申请表交副修学院，副修学院打印学业成绩单（加盖公章）后进行审核。\r\n\r\n3．副修学院审批后，5月18日前，统一将符合发证条件学生的材料及《杭州师范大学副修学位证书审核汇总表》（附件4）报送教务处。\r\n\r\n联系人：徐春梅，联系电话：28865129。', '2018-06-12');
INSERT INTO `message` VALUES ('0000000015', 'S', '这是一个测试', '好的，这只是一个测试而已', '2018-06-19');

-- ----------------------------
-- Table structure for `students`
-- ----------------------------
DROP TABLE IF EXISTS `students`;
CREATE TABLE `students` (
  `id` varchar(48) NOT NULL DEFAULT '',
  `password` varchar(48) DEFAULT NULL,
  `name` varchar(48) DEFAULT NULL,
  `sex` varchar(12) DEFAULT NULL,
  `major` varchar(96) DEFAULT NULL,
  `classId` varchar(96) DEFAULT NULL,
  `phone` varchar(48) DEFAULT NULL,
  `state` varchar(48) DEFAULT NULL,
  `tutorId` varchar(48) DEFAULT NULL,
  `pic` varchar(48) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of students
-- ----------------------------
INSERT INTO `students` VALUES ('2015210405001', '123456', '武松', '男', '计算机', '计算机133', '13588224852', '选定', '20142104056', '1529385171guilian.jpg');
INSERT INTO `students` VALUES ('2015210405002', '123456', '宋江', '男', '计算机', '计算机133', '13588224852', '待定', '20142104063', '152809482114762726301049405.jpg');
INSERT INTO `students` VALUES ('2015210405003', '123456', '晁盖', '男', '计算机', '计算机133', '13588224852', '待定', '20142104063', 'temp.jpg');
INSERT INTO `students` VALUES ('2015210405004', '123456', '李逵', '男', '计算机', '计算机133', '13588224852', '待定', '20142104063', 'temp.jpg');
INSERT INTO `students` VALUES ('2015210405005', '123456', '江青', '男', '计算机', '计算机133', '13588224852', '待定', '20142104063', '1527687758fdgdfg.jpg');
INSERT INTO `students` VALUES ('2015210405012', '123456', '刘备', '男', '软件工程', '软件工程133', '13588664572', '待定', '20142104063', 'temp.jpg');
INSERT INTO `students` VALUES ('2015210405013', '123456', '大鹏', '男', '软件工程', '软件工程133', '13588664572', '未选', null, 'temp.jpg');
INSERT INTO `students` VALUES ('2015210405014', '123456', '张飞', '男', '软件工程', '软件工程133', '13588664572', '选定', '20142104063', 'temp.jpg');
INSERT INTO `students` VALUES ('2015210405015', '123456', '高渐离', '男', '软件工程', '软件工程133', '13588664572', '未选', null, 'temp.jpg');
INSERT INTO `students` VALUES ('2015210405016', '123456', '关羽', '男', '体育', '体教133', '13588664572', '选定', '20142104056', 'temp.jpg');
INSERT INTO `students` VALUES ('2015210405017', '123456', '李白', '男', '体育', '体教133', '13588664572', '选定', '20142104056', 'temp.jpg');
INSERT INTO `students` VALUES ('2015210405018', '123456', '牛魔', '男', '体育', '体教133', '13588664572', '待定', '20142104066', 'temp.jpg');
INSERT INTO `students` VALUES ('2015210405019', '123456', '齐天大圣', '男', '体育', '体教133', '13588664572', '选定', '20142104056', 'temp.jpg');
INSERT INTO `students` VALUES ('2015210405020', '123456', '扁鹊', '男', '计算机', '计算机133', '13588664572', '选定', '20142104056', 'temp.jpg');

-- ----------------------------
-- Table structure for `teacher`
-- ----------------------------
DROP TABLE IF EXISTS `teacher`;
CREATE TABLE `teacher` (
  `id` varchar(48) NOT NULL DEFAULT '',
  `password` varchar(48) DEFAULT NULL,
  `name` varchar(48) DEFAULT NULL,
  `sex` varchar(12) DEFAULT NULL,
  `position` varchar(96) DEFAULT NULL,
  `direction` varchar(96) DEFAULT NULL,
  `phone` varchar(48) DEFAULT NULL,
  `pic` varchar(48) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of teacher
-- ----------------------------
INSERT INTO `teacher` VALUES ('20142104056', '123456', '张三', '男', '教授', '软件工程', '13588225248', 'tea-temp.jpg');
INSERT INTO `teacher` VALUES ('20142104057', '123456', '赵四', '男', '副教授', '软件工程', '13588225248', 'tea-temp.jpg');
INSERT INTO `teacher` VALUES ('20142104058', '123456', '王五', '男', '教授', '物联网', '13588225248', 'tea-temp.jpg');
INSERT INTO `teacher` VALUES ('20142104059', '123456', '李六', '男', '副教授', '计算机', '13588225248', 'tea-temp.jpg');
INSERT INTO `teacher` VALUES ('20142104060', '123456', '吕布', '男', '教授', '计算机', '13588225248', 'tea-temp.jpg');
INSERT INTO `teacher` VALUES ('20142104061', '123456', '卡卡西', '男', '院长', '物联网', '13588225248', '1529389258guilian.jpg');
INSERT INTO `teacher` VALUES ('20142104062', '123456', '鸣人', '男', '教授', '计算机', '13588225248', 'tea-temp.jpg');
INSERT INTO `teacher` VALUES ('20142104063', '123456', '鼬', '男', '教授', '物联网', '13588225248', '1528773829tea-temp.jpg');
INSERT INTO `teacher` VALUES ('20142104064', '123456', '孙尚香', '女', '副院长', '软件工程', '13588225248', 'tea-temp.jpg');
INSERT INTO `teacher` VALUES ('20142104065', '123456', '二营长', '男', '教授', '小学教育', '13588225248', 'tea-temp.jpg');
INSERT INTO `teacher` VALUES ('20142104066', '123456', '楚云飞', '男', '教授', '体育', '13588225248', 'tea-temp.jpg');
INSERT INTO `teacher` VALUES ('20142104067', '123456', '甲1', '男', '教授', '软件工程', '13588225248', 'tea-temp.jpg');
INSERT INTO `teacher` VALUES ('20142104068', '123456', '甲2', '男', '教授', '计算机', '13588225248', 'tea-temp.jpg');
INSERT INTO `teacher` VALUES ('20142104069', '123456', '甲3', '男', '教授', '计算机', '13588225248', 'tea-temp.jpg');
INSERT INTO `teacher` VALUES ('20142104071', '123456', '甲5', '男', '教授', '计算机', '13588225248', 'tea-temp.jpg');
INSERT INTO `teacher` VALUES ('20142104072', '123456', '甲6', '男', '教授', '计算机', '13588225248', 'tea-temp.jpg');
INSERT INTO `teacher` VALUES ('20142104073', '123456', '甲7', '男', '教授', '计算机', '13588225248', 'tea-temp.jpg');
INSERT INTO `teacher` VALUES ('20142104074', '123456', '甲8', '男', '教授', '计算机', '13588225248', 'tea-temp.jpg');
INSERT INTO `teacher` VALUES ('20142104075', '123456', '甲9', '男', '教授', '计算机', '13588225248', 'tea-temp.jpg');
