import {GoabBadgeType, GoabMenuButtonOnActionDetail} from "@abgov/ui-components-common";
import {
    GoabBadge,
    GoabBlock,
    GoabCheckbox,
    GoabContainer,
    GoabDataGrid,
    GoabMenuAction,
    GoabMenuButton
} from "@abgov/react-components";

export const DataGridExample3 = () => {
    type User = {
        id: string;
        name: string;
        status: string;
        updated: string;
        email: string;
        program: string;
        programId: string;
        serviceAccess: string;
    };

    const users: User[] = [
        {
            id: "1",
            name: "Mike Zwei",
            status: "Removed",
            updated: "Jun 30, 2022 at 2:30 PM",
            email: "mike.zwei@gmail.com",
            program: "Wee Wild Ones Curry",
            programId: "74528567",
            serviceAccess: "Claims Adjustments",
        },
        {
            id: "2",
            name: "Emma Stroman",
            status: "To be removed",
            updated: "Nov 28, 2021 at 1:30 PM",
            email: "emma.stroman@gmail.com",
            program: "Fort McMurray",
            programId: "74522643",
            serviceAccess: "Claims Adjustments",
        },
    ];

    const getStatusBadgeType = (status: string): GoabBadgeType => {
        switch (status) {
            case "Removed":
                return "success";
            case "To be removed":
                return "emergency";
            default:
                return "information";
        }
    };

    const handleMenuAction = (userId: string, event: GoabMenuButtonOnActionDetail) => {
        if (event.action === "open") {
            console.log("Open user:", userId);
        } else if (event.action === "delete") {
            console.log("Delete user:", userId);
        }
    };

    return (
    <>
        <GoabDataGrid keyboardNav="layout">
            {users.map((user) => (
                <GoabContainer key={user.id} mt="m" data-grid="row">
                    <GoabBlock direction="row" gap="m" alignment="start">
                        <GoabCheckbox data-grid="cell-0" name={`user-${user.id}`} />

                        <GoabBlock direction="column" gap="m" alignment="start">
                            <GoabBlock direction="row" gap="s" alignment="center">
                                <strong data-grid="cell-1">{user.name}</strong>
                                <GoabBadge
                                    data-grid="cell-2"
                                    type={getStatusBadgeType(user.status)}
                                    content={user.status}
                                />
                            </GoabBlock>

                            <GoabBlock direction="row" gap="xl" alignment="start">
                                <GoabBlock direction="column" gap="xs" data-grid="cell-4">
                                    <strong>Updated</strong>
                                    <span>{user.updated}</span>
                                </GoabBlock>
                                <GoabBlock direction="column" gap="xs" data-grid="cell-5">
                                    <strong>Email</strong>
                                    <span>{user.email}</span>
                                </GoabBlock>
                                <GoabBlock direction="column" gap="xs" data-grid="cell-6">
                                    <strong>Program</strong>
                                    <span>{user.program}</span>
                                </GoabBlock>
                            </GoabBlock>

                            <GoabBlock direction="row" gap="xl" alignment="start">
                                <GoabBlock direction="column" gap="xs" data-grid="cell-7">
                                    <strong>Program ID</strong>
                                    <span>{user.programId}</span>
                                </GoabBlock>
                                <GoabBlock direction="column" gap="xs" data-grid="cell-8">
                                    <strong>Service access</strong>
                                    <span>{user.serviceAccess}</span>
                                </GoabBlock>
                            </GoabBlock>
                        </GoabBlock>

                        <GoabMenuButton data-grid="cell-3" text="Actions" type="tertiary" onAction={(e) => handleMenuAction(user.id, e)}>
                            <GoabMenuAction action="open" text="Open" />
                            <GoabMenuAction action="delete" text="Delete" />
                        </GoabMenuButton>
                    </GoabBlock>
                </GoabContainer>
            ))}
        </GoabDataGrid>
    </>
    )
}
