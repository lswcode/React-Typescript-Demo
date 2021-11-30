import { Row, Col } from "_antd@4.17.2@antd";
import { Template } from "./template";
// 引入Template，组件复用
export const Grid: React.FC = (props) => {
  return (
    <div>
      <Row style={{ backgroundColor: "grey", height: 100 }}>
        <Col span={24}>
          <Template id={77777} title="产品1号" price={500} />
        </Col>
      </Row>
      <Row style={{ backgroundColor: "grey", height: 100 }}>
        <Col style={{ backgroundColor: "yellow" }} offset={6} span={5}>
          <Template id={11111111} title="产品2号" price={100} />
        </Col>
        <Col style={{ backgroundColor: "green" }} offset={2} span={2}>
          <Template id={22222222} title="产品3号" price={900} />
        </Col>
      </Row>
    </div>
  );
};

// 行（row）和列（col），所有列（Col）必须放在Row内
// 一个rouw表示一行内容，col用来定义这个行中分为几块(列)
// 栅格系统中的列是指1到24的值来表示其跨越的范围，24即占满元素，例如，三个等宽的列可以使用 <Col span={8} /> 来创建
// offset设置col之间左侧的空白格，6表示4分之一的空格
