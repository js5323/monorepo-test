import React from 'react';
import type { DatePickerProps } from 'antd';
import { Button, DatePicker, Drawer, Flex, Slider, Space, Typography } from 'antd';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import { RangePickerProps } from 'antd/es/date-picker';

const onChange: RangePickerProps['onChange'] = (dates, dateStrings) => {
  console.log(dates, dateStrings);
};

type DateComponent = Required<NonNullable<DatePickerProps<Dayjs>['components']>>['date'];
type GetProps<T> = T extends React.ComponentType<infer P> ? P : never;

const MyDatePanel = (props: GetProps<DateComponent>) => {
  const { value, onSelect, onHover } = props;

  const [innerValue, setInnerValue] = React.useState(value);

  React.useEffect(() => {
    if (value) {
      setInnerValue(value);
    }
  }, [value]);


  // Render
  return (
    <Flex vertical gap="small" style={{ padding: 16 }}>
      test
    </Flex>
  );
};



export default function Home() {  

  const [isOpen, setIsOpen] = React.useState(false)

  const panelRender = (originalPanel:React.ReactNode) => {
    return <Drawer open={isOpen} onClose={() => setIsOpen(false)} placement='bottom'>{originalPanel}</Drawer>;
  };

  return (
    <Space direction="vertical">
    <DatePicker.RangePicker
      onClick={() => setIsOpen(true)}      
      showNow={false}
      onChange={onChange}
      // components={{
      //   date: MyDatePanel,
      // }}
      panelRender={
        panelRender
      }
    />
  </Space>
  )
}