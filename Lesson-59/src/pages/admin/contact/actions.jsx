import { changeStatus } from "../../../services/contact"

export const changeSTatusAction = async (id, setIsRender) => {
  try {
    await changeStatus(id)
    setIsRender({})

  } catch (error) {

  }
}