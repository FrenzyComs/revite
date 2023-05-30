import { Github } from "@styled-icons/boxicons-logos";
import { BugAlt, Group, ListOl } from "@styled-icons/boxicons-regular";
import { Link } from "react-router-dom";

import styles from "./Panes.module.scss";
import { Text } from "preact-i18n";

import { CategoryButton, Column, Tip } from "@frenzycoms/ui";

export function Feedback() {
    return (
        <Column>
            <Tip palette="warning">
                <span>
                    We are currently in early beta, so bugs will occour! To report any major issues, friend @ripley!

                    (note: I'm not your personal tech support. This is to report actual issues with the Frenzy platform.)
                </span>
            </Tip>
            <div className={styles.feedback}>
                <a
                    href="https://github.com/FrenzyComs/revite/issues/new/choose"
                    target="_blank"
                    rel="noreferrer">
                    <CategoryButton
                        action="external"
                        icon={<ListOl size={24} />}
                        description={
                            <Text id="app.settings.pages.feedback.issue_desc" />
                        }>
                        <Text id="app.settings.pages.feedback.issue" />
                    </CategoryButton>
                </a>
                <Link to="/invite/therevolt">
                    <a>
                        <CategoryButton
                            action="chevron"
                            icon={<Group size={24} />}
                            description="You can report issues and discuss improvements with us directly here.">
                            {"Join The Revolt"}
                        </CategoryButton>
                    </a>
                </Link>
            </div>
        </Column>
    );
}
