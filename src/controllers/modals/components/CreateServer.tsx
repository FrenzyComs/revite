import { useHistory } from "react-router-dom";

import { Text } from "preact-i18n";

import { ModalForm } from "@frenzycoms/ui";

import { useClient } from "../../client/ClientController";
import { mapError } from "../../client/jsx/error";
import { ModalProps } from "../types";

/**
 * Server creation modal
 */
export default function CreateServer({
    ...props
}: ModalProps<"create_server">) {
    const history = useHistory();
    const client = useClient();

    return (
        <ModalForm
            {...props}
            title={<Text id="app.main.servers.create" />}
            description={
                <div>
                    By creating this server, you agree to the{" "}
                    <a
                        href="https://transfem.pp.ua/aup"
                        target="_blank"
                        rel="noreferrer">
                        Acceptable Use Policy.
                    </a>
                </div>
            }
            schema={{
                name: "text",
            }}
            data={{
                name: {
                    field: (
                        <Text id="app.main.servers.name" />
                    ) as React.ReactChild,
                },
            }}
            callback={async ({ name }) => {
                const server = await client.servers
                    .createServer({
                        name,
                    })
                    .catch(mapError);

                history.push(`/server/${server._id}`);
            }}
            submit={{
                children: <Text id="app.special.modals.actions.create" />,
            }}
        />
    );
}
