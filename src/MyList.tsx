import { List, type RowComponentProps } from "react-window";

const PaddedList = ({ names }: { names: string[] }) => {
  function RowComponent({
    index,
    names,
    style,
  }: RowComponentProps<{
    names: string[];
  }>) {
    return (
      <div className="myrow flex items-center justify-between" style={style}>
        {names[index]}
        {/*<div className="text-slate-500 text-xs">{`${index + 1} of ${names.length}`}</div>*/}
      </div>
    );
  }

  return (
    <div className="mylistcontainer">
      <List
        rowProps={{ names }}
        rowComponent={RowComponent}
        rowCount={names.length}
        rowHeight={40}
        style={{ width: 260, height: "calc(100% - 100px)" }}
        className="mylist"
      />
    </div>
  );
};

export default PaddedList;
