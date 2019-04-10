package indi.cyken.web.servlet;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import indi.cyken.domain.Category;
import indi.cyken.service.CategoryService;
import indi.cyken.utils.BeanFactory;
import indi.cyken.utils.JsonUtil;


/**
 * 课本分类
 */
public class CategoryServlet extends BaseServlet {

	/**
	 * 查询所有的分类
	 */
	public String findAll(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// 1.调用categoryservice 查询所有的分类 返回值list
		CategoryService cs = (CategoryService) BeanFactory.getBean("CategoryService");
		List<Category> clist = null;
		try {
			clist = cs.findAll();
		} catch (Exception e) {
			e.printStackTrace();
		}

		// 2.将返回值转成json格式 返回到页面上
		//request.setAttribute("clist", clist);
		String json = JsonUtil.list2json(clist);
		
		//3.写回去
		response.setContentType("text/html;charset=utf-8");
		response.getWriter().println(json);
		
		return null;
	}

}
