import { GroupBase } from "react-select";

declare module "react-select/dist/declarations/src/Select" {
  export interface Props<
    Option = unknown,
    IsMulti extends boolean = false,
    Group extends GroupBase<Option> = GroupBase<Option>
  > {
    option?: Option;
    isMulti: IsMulti;
    group?: Group;
    label?: string;
  }
}
