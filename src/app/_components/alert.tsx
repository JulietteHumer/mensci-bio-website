import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";
import cn from "classnames";

type Props = {
  preview?: boolean;
};

const Alert = ({ preview }: Props) => {
  return (
    <div
      className={cn("border-b", {
        "bg-primary text-white border-primary-dark": preview,
        "bg-gray-50 border-gray-200": !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This is a preview.{" "}
              <a
                href="/api/exit-preview"
                className="underline hover:text-white duration-200 transition-colors"
              >
                Click here
              </a>{" "}
              to exit preview mode.
            </>
          ) : (
            <>
              Learn more about our{" "}
              <a
                href="/research"
                className="text-primary-dark hover:text-primary underline duration-200 transition-colors"
              >
                research methodology
              </a>
              .
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Alert;
