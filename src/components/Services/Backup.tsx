import React from "react";

import Link from "../Shared/Link";

const Backup: React.FC = (): React.ReactElement => {
    return (
        <React.Fragment>
            <p>
                Backup is one thing you don&apos;t want to spend time worrying about. You just want to know that it
                works and that it is in safe hands. If your website is hosted on my server, your backup&apos;s is fully
                automated and happens overnight so it doesn&apos;t get in the way. Three backup slots are executed and
                rotated automatically: a daily backup, a 2-7 days old backup, and an 8-14 days old backup.
            </p>
            <p>
                If I made a website for you, I will also save your project on an external hard drive and on{" "}
                <Link href="https://github.com" target="_blank" external>
                    github.com
                </Link>{" "}
                (private repository) when I am done developing it so you always have access to a fresh copy of the
                website if you should need it.
            </p>
        </React.Fragment>
    );
};

export default Backup;
