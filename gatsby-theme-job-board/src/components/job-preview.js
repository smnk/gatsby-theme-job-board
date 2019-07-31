import { Link } from "gatsby"
import { Styled } from "theme-ui"
import JobMeta from "./job-meta"
/** @jsx jsx */
import { jsx, Flex } from "theme-ui"

const PostPreview = ({
  title,
  formattedDate,
  company,
  location,
  slug,
}) => {
  return (
    <article>
      <Flex
        sx={{
          paddingTop: 3,
          paddingBottom: 3,
          marginBottom: 3,
          alignItems: "center",
          flexDirection: ["column", "row"],
        }}
      >
        <Link 
          sx={{
            textDecoration: "none",
          }}
          to={slug}
        >
          <Styled.h2 sx={{ marginBottom: 0 }}>{title}</Styled.h2>
          <JobMeta formattedDate={formattedDate} company={company} location={location} />
        </Link>
      </Flex>
    </article>
  )
}

export default PostPreview
