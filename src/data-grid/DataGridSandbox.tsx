import {
    GoabBadge,
    GoabBlock,
    GoabCheckbox,
    GoabContainer,
    GoabDataGrid,
    GoabMenuAction,
    GoabMenuButton,
    GoabTable,
    GoabTableSortHeader
} from "@abgov/react-components";
import {useState} from "react";
import {GoabCheckboxOnChangeDetail, GoabTableOnSortDetail} from "@abgov/ui-components-common";
import {DataGridExample1} from "./DataGridExample1";
import {DataGridExample2} from "./DataGridExample2";
import {DataGridExample3} from "./DataGridExample3";

type User = {
    id: string;
    name: string;
    status: string;
    email: string;
};

export const DataGridSandbox = () => {
    const [users, setUsers] = useState<User[]>([
        { id: "1", name: "Alice Johnson", status: "Active", email: "alice@example.com" },
        { id: "2", name: "Bob Smith", status: "Pending", email: "bob@example.com" },
    ]);
    const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
    const [isSelectedAll, setIsSelectedAll] = useState(false);

    const getStatusBadgeType = (status: string): "success" | "important" | "information" => {
        switch (status) {
            case "Active":
                return "success";
            case "Pending":
                return "important";
            default:
                return "information";
        }
    };

    const isSelected = (userId: string): boolean => {
        return selectedUsers.includes(userId);
    };

    const handleSort = (event: GoabTableOnSortDetail) => {
        const { sortBy, sortDir } = event;
        const sortedUsers = [...users].sort(
            (a: any, b: any) => (a[sortBy] > b[sortBy] ? 1 : -1) * sortDir
        );
        setUsers(sortedUsers);
    };

    const selectAll = (checked: boolean) => {
        setIsSelectedAll(checked);
        setSelectedUsers(checked ? users.map(u => u.id) : []);
    };

    const toggleSelection = (userId: string) => {
        if (selectedUsers.includes(userId)) {
            setSelectedUsers(selectedUsers.filter(id => id !== userId));
        } else {
            setSelectedUsers([...selectedUsers, userId]);
        }
    };

    const handleMenuAction = (userId: string, action: string) => {
        if (action === "view") {
            console.log("View user:", userId);
        } else if (action === "delete") {
            setUsers(users.filter(u => u.id !== userId));
        }
    };

    return (
        <>
            <GoabDataGrid keyboardNav="table">
                <GoabTable width="100%" onSort={handleSort}>
                    <thead>
                    <tr data-grid="row">
                        <th style={{ paddingBottom: 0 }} data-grid="cell">
                            <GoabCheckbox
                                name="selectAll"
                                mt="2xs"
                                checked={isSelectedAll}
                                onChange={(e) => selectAll(e.checked)}
                            />
                        </th>
                        <th data-grid="cell">
                            <GoabTableSortHeader name="name">Name</GoabTableSortHeader>
                        </th>
                        <th data-grid="cell">
                            <GoabTableSortHeader name="status">Status</GoabTableSortHeader>
                        </th>
                        <th data-grid="cell">Email</th>
                        <th data-grid="cell">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user) => (
                        <tr key={user.id} data-grid="row">
                            <td data-grid="cell">
                                <GoabCheckbox
                                    name={`user${user.id}`}
                                    checked={isSelected(user.id)}
                                    onChange={() => toggleSelection(user.id)}
                                />
                            </td>
                            <td data-grid="cell">{user.name}</td>
                            <td data-grid="cell">
                                <GoabBadge type={getStatusBadgeType(user.status)} content={user.status} />
                            </td>
                            <td data-grid="cell">{user.email}</td>
                            <td data-grid="cell">
                                <GoabMenuButton
                                    text="Actions"
                                    type="tertiary"
                                    onAction={(e) => handleMenuAction(user.id, e.action)}
                                >
                                    <GoabMenuAction action="view" text="View" />
                                    <GoabMenuAction action="delete" text="Delete" />
                                </GoabMenuButton>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </GoabTable>
            </GoabDataGrid>

            <h3>Card Layout View</h3>
            <GoabDataGrid keyboardNav="layout" keyboardIconPosition="right" keyboardIconVisibility="visible">
              {users.map((user) => (
                <GoabContainer key={user.id} mt="m" data-grid="row">
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <GoabCheckbox
                      data-grid="cell-0"
                      name={`user${user.id}`}
                      checked={isSelected(user.id)}
                      onChange={() => toggleSelection(user.id)}
                    />
                    <div style={{ flex: 1 }}>
                      <GoabBlock direction="row" gap="s" alignment="center">
                        <strong data-grid="cell-1">{user.name}</strong>
                        <GoabBadge
                          data-grid="cell-2"
                          type={getStatusBadgeType(user.status)}
                          content={user.status}
                        />
                      </GoabBlock>
                      <span data-grid="cell-3" style={{ color: "var(--goa-color-text-secondary)" }}>
                        {user.email}
                      </span>
                    </div>
                    <GoabMenuButton
                      data-grid="cell-4"
                      text="Actions"
                      type="tertiary"
                      onAction={(e) => handleMenuAction(user.id, e.action)}
                    >
                      <GoabMenuAction action="view" text="View" />
                      <GoabMenuAction action="delete" text="Delete" />
                    </GoabMenuButton>
                  </div>
                </GoabContainer>
              ))}
            </GoabDataGrid>

            <h3>Basic table vs navigation</h3>
            <DataGridExample1/>

            <h3>With sort</h3>
            <DataGridExample2/>

            <h3>Layout</h3>
            <DataGridExample3/>
        </>

    )
}
