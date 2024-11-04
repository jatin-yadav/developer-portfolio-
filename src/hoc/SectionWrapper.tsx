import { FC } from "react";

export const SectionWrapper = (Component: FC, idName: string) =>
    function HOC() {
        return (
            <>
                <span className="hash-span" id={idName}>
                    &nbsp;
                </span>
                <Component />
            </>
        );
    };
