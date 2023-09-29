import { WarningIcon } from "assets";
import type { InputHTMLAttributes } from "react";

export interface InputType extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  Icon?: JSX.Element;
  register?: any;
  warning?: string | null;
}

export const Input = ({
  warning,
  Icon,
  register,
  id,
  type = "text",
  ...otherProps
}: InputType) => {
  return (
    <div className="w-full flex flex-col gap-4 relative">
      <div
        className={`flex px-4 bg-transparent border-[1px] border-[#8f9096] hover:border-white rounded-md ${
          warning ? "border-[rgb(216,195,75)]" : null
        }`}
      >
        {Icon && <span className="mr-3">{Icon}</span>}
        <input
          className="custom-input"
          id={id}
          autoComplete="off"
          type={type}
          {...otherProps}
          {...register(id || { email: "", username: "", password: "" })}
        />

        {warning && (
          <span className="warning-text">
            <WarningIcon /> {warning}
          </span>
        )}
      </div>
    </div>
  );
};
