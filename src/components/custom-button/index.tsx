import {Button, Form} from "antd";

type Props = {
    children: React.ReactNode;
    htmlType?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void;
    type?: "link" | "text" | "ghost" | "default" | "primary" | "dashed";
    danger?: boolean;
    loading?: boolean;
    shape?: "default" | "circle" | "round" | undefined;
    icon?: React.ReactNode
}

export const CustomButton = ({
    children,
    htmlType = 'button',
    type,
    danger,
    loading,
    shape,
    icon,
    onClick,
}: Props) => {
    return (
        <Form.Item>
            <Button
                htmlType={htmlType}
                danger={danger}
                type={type}
                loading={loading}
                shape={shape}
                icon={icon}
                onClick={onClick}
            >{children}</Button>
        </Form.Item>
    );
};
