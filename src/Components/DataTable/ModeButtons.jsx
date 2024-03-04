

function ModeButtons() {
  return isEditing ? (
    <td>
        <button>Save</button>
    </td>
  ) : (
    <td>
        <button>Delete</button>
        <button>Edit</button>
    </td>
  )
}

export default ModeButtons