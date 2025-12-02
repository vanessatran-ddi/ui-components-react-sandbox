import {GoabMenuAction, GoabMenuButton} from "@abgov/react-components"

export const MenuButtonPlayground = () => {
    const menuButtonOnAction = (action: string) => {
        console.log("Last action: ", action);
    };
    return (
        <>
            <GoabMenuButton text="Menu actions" type="primary" onAction={menuButtonOnAction}>
                <GoabMenuAction text="View profile" action="profile" icon="person-circle"></GoabMenuAction>
                <GoabMenuAction text="Notifications" action="notifications" icon="notifications"></GoabMenuAction>
                <GoabMenuAction text="Log out" action="logout" icon="log-out"></GoabMenuAction>
            </GoabMenuButton>
    </>
    )
}
