import React from "react";

import Link from "../Shared/Link";

const Hosting: React.FC = (): React.ReactElement => {
    return (
        <React.Fragment>
            <p>
                Do you need a place to have your website? I can offer to host websites on my server for small and medium
                sized businesses. My server is hosted by{" "}
                <Link href="https://linode.com" target="_blank" external>
                    linode.com
                </Link>{" "}
                which is one of the world&apos;s leading hosting providers.
            </p>
            <p>
                The server is running on Ubuntu 16.04 LTS and currently have 8 GB RAM, 4 CPU cores, 96 GB SSD storage, 4
                TB transfer (monthly), 40 gbps network in and 1000 mbps network out. However, the server can be upgraded
                with a single keystroke if necessary.
            </p>
        </React.Fragment>
    );
};

export default Hosting;
