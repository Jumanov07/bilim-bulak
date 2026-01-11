"use client";
import { useLocale } from "next-intl";
import { Label, ListBox, Select } from "@heroui/react";

type Locale = "kg" | "ru";

export type LocalizedOption = {
  id: number;
  nameKg: string;
  nameRu: string;
};

type Props = {
  label?: string;
  placeholder?: string;
  value: number | null;
  onChange: (value: number | null) => void;
  options: LocalizedOption[];
  disabled?: boolean;
  className?: string;
};

const getOptionLabel = (opt: LocalizedOption, locale: Locale) => {
  return locale === "ru" ? opt.nameRu : opt.nameKg;
};

export const SelectField = ({
  label,
  placeholder = "Select",
  value,
  onChange,
  options,
  disabled = false,
  className,
}: Props) => {
  const locale = (useLocale() as Locale) ?? "kg";

  const selectedKey = value == null ? undefined : String(value);

  return (
    <Select
      className={className}
      placeholder={placeholder}
      isDisabled={disabled}
      selectedKey={selectedKey}
      onSelectionChange={(key) => {
        if (!key) return onChange(null);
        const id = Number(key);
        onChange(Number.isFinite(id) ? id : null);
      }}
    >
      {label && <Label>{label}</Label>}

      <Select.Trigger>
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>

      <Select.Popover>
        <ListBox>
          {options.map((opt) => (
            <ListBox.Item
              key={String(opt.id)}
              id={String(opt.id)}
              textValue={getOptionLabel(opt, locale)}
            >
              {getOptionLabel(opt, locale)}
              <ListBox.ItemIndicator />
            </ListBox.Item>
          ))}
        </ListBox>
      </Select.Popover>
    </Select>
  );
};
